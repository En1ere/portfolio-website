import { Game } from "@/projects/tamagochi/game/game.ts";
import { loadAssets, waitPageLoad } from "@/service/helpers.ts";
import type { IGamePayload } from "@/projects/tamagochi/types/Interfaces.ts";
import { CTamagotchiAssetUrls } from "@/projects/tamagochi/game/assets.ts";
import { RESOLUTION } from "@/projects/tamagochi/types/constants.ts";

export async function initGame() {
  await waitPageLoad();
  const canvas:HTMLCanvasElement|null = document.getElementById('project-canvas') as HTMLCanvasElement;

  if (!canvas) {
    throw new Error("Cannot find canvas")
  }

  const ctx = canvas.getContext("2d")

  if (ctx === null) {
    throw new Error("Cannot get context")
  }

  canvas.width = RESOLUTION.width;
  canvas.height = RESOLUTION.height;

  const assets = await loadAssets(CTamagotchiAssetUrls)

  const payload: IGamePayload = {
    canvasWidth: canvas.width,
    canvasHeight: canvas.height,
    ctx,
    assets,
  }

  const game = new Game(payload)

  let lastTime = 0
  function animate(timestamp: number): void {
    const deltaTime = (timestamp - lastTime) / 1000;
    game.update(deltaTime)
    game.draw(payload.ctx, deltaTime)
    lastTime = timestamp;
    requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate);
}
