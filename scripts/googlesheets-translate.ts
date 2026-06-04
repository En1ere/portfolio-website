import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import 'dotenv/config';

const LANGS_DIR = path.resolve('src/locales');
const REQUIRED_HEADERS = ['key'] as const;

type SheetRow = {
  get: (header: string) => string | undefined;
};

type LangMap = Record<string, string[]>;
type FlatLocaleMessages = Record<string, string>;
type NestedMessages = {
  [key: string]: string | NestedMessages;
};

function isNestedMessages(value: unknown): value is NestedMessages {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

function log(message: string) {
  console.warn(`[i18n:pull] ${message}`);
}

function ensureEnv() {
  const missing: string[] = [];

  if (!GOOGLE_SHEET_ID) {missing.push('GOOGLE_SHEET_ID');}
  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL) {missing.push('GOOGLE_SERVICE_ACCOUNT_EMAIL');}
  if (!GOOGLE_PRIVATE_KEY) {missing.push('GOOGLE_PRIVATE_KEY');}

  if (missing.length > 0) {
    throw new Error(`Missing required env variables: ${missing.join(', ')}`);
  }
}

function normalizeCellValue(value: string | undefined): string {
  return (value ?? '').trim();
}

function getColumn(rows: SheetRow[], header: string): string[] {
  return rows.map((row) => normalizeCellValue(row.get(header)));
}

function assertHeaders(headers: string[]) {
  for (const header of REQUIRED_HEADERS) {
    if (!headers.includes(header)) {
      throw new Error(`The sheet must contain a "${header}" column`);
    }
  }

  if (headers.length < 2) {
    throw new Error('The sheet must contain at least one locale column besides "key"');
  }
}

function getLocaleHeaders(headers: string[]): string[] {
  return headers.filter((header) => !REQUIRED_HEADERS.includes(header as (typeof REQUIRED_HEADERS)[number]));
}

function setNestedValue(target: NestedMessages, key: string, value: string) {
  const parts = key.split('.').map((part) => part.trim()).filter(Boolean);

  if (parts.length === 0) {
    return;
  }

  let current: NestedMessages = target;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) {
      return;
    }

    const isLast = i === parts.length - 1;

    if (isLast) {
      current[part] = value;
      return;
    }

    const existingValue = current[part];

    if (existingValue === undefined) {
      const next: NestedMessages = {};
      current[part] = next;
      current = next;
      continue;
    }

    if (typeof existingValue === 'string') {
      throw new Error(
        `Cannot create nested key "${key}" because "${parts.slice(0, i + 1).join('.')}" is already a string value`,
      );
    }

    if (!isNestedMessages(existingValue)) {
      throw new Error(
        `Cannot create nested key "${key}" because "${parts.slice(0, i + 1).join('.')}" is not an object`,
      );
    }

    current = existingValue;
  }
}

function toNestedMessages(flatMap: FlatLocaleMessages): NestedMessages {
  const result: NestedMessages = {};

  for (const [key, value] of Object.entries(flatMap)) {
    setNestedValue(result, key, value);
  }

  return result;
}

function validateKey(key: string, rowNumber: number) {
  if (!key) {
    return;
  }

  if (key.startsWith('.') || key.endsWith('.')) {
    throw new Error(`Invalid key "${key}" at row ${rowNumber}: keys cannot start or end with "."`);
  }

  if (key.includes('..')) {
    throw new Error(`Invalid key "${key}" at row ${rowNumber}: keys cannot contain ".."`);
  }
}

async function importTranslateDataFromGoogleSheets(): Promise<{
  langs: LangMap;
  headers: string[];
  sheetTitle: string;
  rowCount: number;
}> {
  ensureEnv();

  const serviceAccountAuth = new JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID!, serviceAccountAuth);

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  if (!sheet) {
    throw new Error('The spreadsheet does not contain any sheets');
  }

  const rows = (await sheet.getRows()) as unknown as SheetRow[];
  const headers = sheet.headerValues.map((header) => normalizeCellValue(header));

  assertHeaders(headers);

  const langs: LangMap = {};

  for (const header of headers) {
    langs[header] = getColumn(rows, header);
  }

  return {
    langs,
    headers,
    sheetTitle: sheet.title,
    rowCount: rows.length,
  };
}

async function writeLangFiles(langs: LangMap, localeHeaders: string[]) {
  await fs.mkdir(LANGS_DIR, { recursive: true });

  const keys = langs.key;

  if (!keys) {
    throw new Error('The sheet must contain a "key" column');
  }

  for (const lang of localeHeaders) {
    const flatMessages: FlatLocaleMessages = {};
    let writtenCount = 0;

    for (let rowIdx = 0; rowIdx < keys.length; rowIdx++) {
      const rowNumber = rowIdx + 2;
      const key = normalizeCellValue(keys[rowIdx]);
      const value = normalizeCellValue(langs[lang]?.[rowIdx]);

      if (!key) {
        continue;
      }

      validateKey(key, rowNumber);

      if (flatMessages[key] !== undefined) {
        throw new Error(`Duplicate key "${key}" in locale "${lang}" at row ${rowNumber}`);
      }

      flatMessages[key] = value;
      writtenCount += 1;
    }

    const nestedMessages = toNestedMessages(flatMessages);
    const filePath = path.join(LANGS_DIR, `${lang}.json`);

    await fs.writeFile(filePath, JSON.stringify(nestedMessages, null, 2) + '\n', 'utf-8');
    log(`Wrote ${writtenCount} keys → ${path.relative(process.cwd(), filePath)}`);
  }
}

async function run() {
  log('Starting import from Google Sheets...');

  const { langs, headers, sheetTitle, rowCount } = await importTranslateDataFromGoogleSheets();
  const localeHeaders = getLocaleHeaders(headers);

  if (localeHeaders.length === 0) {
    throw new Error('No locale columns found. Expected headers like: key, ru, en');
  }

  log(`Connected to sheet: ${sheetTitle}`);
  log(`Found headers: ${headers.join(', ')}`);
  log(`Detected locales: ${localeHeaders.join(', ')}`);
  log(`Rows to process: ${rowCount}`);

  await writeLangFiles(langs, localeHeaders);

  log('Locales successfully imported from Google Sheets');
}

run().catch((error) => {
  console.error('[i18n:pull] Failed to import locales');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
