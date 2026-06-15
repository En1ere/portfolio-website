import { type CTamagotchiAssetUrls, type TTamagotchiAssetKey } from "@/projects/tamagochi/game/assets.ts";

type AssetUrls = typeof CTamagotchiAssetUrls;
type AssetKey = TTamagotchiAssetKey;

export const throttle = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number,
) => {
  let isThrottled = false;
  let lastArgs: T | null = null;

  const run = (...args: T): void => {
    callback(...args);
    isThrottled = true;

    setTimeout(() => {
      if (lastArgs) {
        const argsToRun = lastArgs;
        lastArgs = null;
        run(...argsToRun);
        return;
      }

      isThrottled = false;
    }, delay);
  };

  return (...args: T): void => {
    if (isThrottled) {
      lastArgs = args;
      return;
    }

    run(...args);
  };
};

export async function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = async () => {
      try {
        await img.decode()
        resolve(img)
      } catch {
        reject(new Error(`Cannot decode image: ${src}`))
      }
    }
    img.onerror = () => reject(new Error(`Cannot load image: ${src}`))
    img.src = src
  })
}

export async function loadAssets(assetUrls: AssetUrls): Promise<Record<AssetKey, HTMLImageElement>> {
  const entries = await Promise.all(
    Object.entries(assetUrls).map(async ([key, url]) => {
      const image = await loadImage(url)
      return [key, image] as const
    }),
  )

  return Object.fromEntries(entries) as Record<AssetKey, HTMLImageElement>
}

export const waitPageLoad = (): Promise<void> => {
  if(!document) {new Error('No document');}

  if (document.readyState === 'complete') {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    window.addEventListener('load', () => resolve(), { once: true })
  })
}
