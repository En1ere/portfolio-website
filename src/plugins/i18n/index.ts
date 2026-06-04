import { createI18n } from 'vue-i18n';

import en from '@/locales/en.json';
import ru from '@/locales/ru.json';

type MessageSchema = typeof ru;
type Locale = 'ru' | 'en';

export const i18n = createI18n<[MessageSchema], Locale>({
  legacy: false,
  globalInjection: true,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru,
    en,
  },
});
