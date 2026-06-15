import type { TTamagotchiAssetKey } from "@/projects/tamagochi/game/assets.ts";

export type TAsset = Record<TTamagotchiAssetKey, HTMLImageElement>

export interface ICoords {
  x: number
  y: number
  width: number
  height: number
}

export interface IFrames {
  frameX: number
  frameY: number
  image: HTMLImageElement
  maximumXFrame: number
}

export interface IPetStats {
  hunger: number,
  energy: number,
  hygiene: number,
  health: number,
  mood: number,
  age: number,
}

export type PetStatKey = keyof IPetStats;
