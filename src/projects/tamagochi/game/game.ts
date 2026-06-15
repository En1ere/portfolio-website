import type { IGamePayload } from "@/projects/tamagochi/types/Interfaces.ts";
import { Background } from "@/projects/tamagochi/game/background.ts";
import { Pet } from "@/projects/tamagochi/game/pet.ts";
import { PET_SIZE } from "@/projects/tamagochi/types/constants.ts";

export class Game {
  width: number
  height: number
  background: Background
  pet: Pet
  ctx: CanvasRenderingContext2D

  constructor({ canvasWidth, canvasHeight, ctx, assets }: IGamePayload) {
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.background = new Background(this, assets.bgRoom);
    this.pet = new Pet(this, (this.width / 2 - PET_SIZE.width / 2), this.height / 2, PET_SIZE.width, PET_SIZE.height, assets.petCat);
    this.ctx = ctx;
  }

  update(deltaTime: number): void {
    this.background.update()
    this.pet.update(deltaTime)
  }
  draw(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    this.background.draw(ctx)
    this.pet.draw(ctx, deltaTime)
  }
}






