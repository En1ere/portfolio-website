import type { Game } from "@/projects/tamagochi/game/game.ts";
import { RESOLUTION } from "@/projects/tamagochi/types/constants.ts";

export class Layer {
  game: Game
  width: number
  height: number
  image: CanvasImageSource
  x: number
  y: number

  constructor(game: Game, width: number, height: number, image: CanvasImageSource) {
    this.game = game;
    this.width = width;
    this.height = height;
    this.image = image;
    this.x = 0;
    this.y = 0;
  }

  update() {

  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}

export class Background {
  game: Game
  width: number
  height: number
  image: HTMLImageElement
  layerImage: Layer
  backgroundLayers: Layer[]

  constructor(game: Game, image: HTMLImageElement) {
    this.game = game;
    this.width = RESOLUTION.width;
    this.height = RESOLUTION.height;
    this.image = image;
    this.layerImage = new Layer(this.game, this.width, this.height, this.image)
    this.backgroundLayers = [this.layerImage];
  }

  update() {
    this.backgroundLayers.forEach(layer => {
      layer.update()
    })
  }
  draw(context: CanvasRenderingContext2D) {
    this.backgroundLayers.forEach(layer => {
      layer.draw(context)
    })
  }
}
