import type { TAsset } from "@/projects/tamagochi/types/types.ts";

export interface IGamePayload {
  canvasWidth: number,
  canvasHeight: number,
  ctx: CanvasRenderingContext2D,
  assets: TAsset
}
