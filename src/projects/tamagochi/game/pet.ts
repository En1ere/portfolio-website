import type { Game } from "@/projects/tamagochi/game/game.ts";
import {
  AppearanceState,
  BathState,
  CuddleState, DeathState, DiscomfortState,
  EatState, GrowState,
  HealState,
  IdleState, PlayState,
  SickState,
  SleepState, SpecialAction1State, SpecialAction2State,
  ThinkState, ToiletState,
} from "@/projects/tamagochi/game/petStates.ts";
import type { ICoords, IFrames, IPetStats } from "@/projects/tamagochi/types/types.ts";
import { PET_DECAY, PET_STAT_LIMITS, STATE_RULES } from "@/projects/tamagochi/game/pet.config.ts";
import { EPetStates } from "@/projects/tamagochi/types/constants.ts";

type TState = IdleState | ThinkState | SleepState | EatState | SickState | HealState | PlayState | CuddleState | BathState | DeathState | AppearanceState | GrowState | SpecialAction1State | SpecialAction2State | ToiletState | DiscomfortState;

export class Pet {
  game: Game
  coords: ICoords
  states: TState[]
  currentState: IdleState
  frames: IFrames
  fps: number
  frameInterval: number
  frameTimer: number

  stats: IPetStats = {
    hunger: 40,
    energy: 100,
    hygiene: 100,
    health: 100,
    mood: 80,
    age: 0,
  }

  isDead: boolean = false

  constructor(game: Game, x: number, y: number, width: number, height: number, image: HTMLImageElement) {
    this.game = game
    this.coords = {
      x: x,
      y: y,
      width: width,
      height: height,
    }
    this.frames = {
      image: image,
      frameX: 0,
      frameY: 0,
      maximumXFrame: 7,
    }

    this.states = [new IdleState(this), new ThinkState(this), new SleepState(this), new EatState(this), new SickState(this), new HealState(this), new PlayState(this), new CuddleState(this), new BathState(this), new DeathState(this), new AppearanceState(this), new GrowState(this), new SpecialAction1State(this), new SpecialAction2State(this), new ToiletState(this), new DiscomfortState(this)]
    this.currentState = this.states[0]

    this.fps = 10
    this.frameTimer = 0
    this.frameInterval = 1000 / this.fps
  }

  clamp(stat: keyof IPetStats, value:number): number {
    return Math.max(PET_STAT_LIMITS[stat].min, Math.min(value, PET_STAT_LIMITS[stat].max))
  }

  changeStat(stat: keyof IPetStats, value: number) {
    this.stats[stat] = this.clamp(stat, this.stats[stat] + value)
  }

  resolveState(): EPetStates {
    return STATE_RULES.find(rule => rule.when(this.stats))!.state;
  }

  decayStats(deltaTime: number) {
    if(this.isDead) {
      return;
    }

    const hungerMultiplier = this.stats.hunger < 10 ? 3 : this.stats.hunger < 20 ? 2 : 0;

    this.changeStat('hunger',  -PET_DECAY.hunger * deltaTime);
    this.changeStat('energy', -PET_DECAY.energy * deltaTime);
    this.changeStat('hygiene', -PET_DECAY.hygiene * deltaTime);
    this.changeStat('mood',   -PET_DECAY.mood * deltaTime * (hungerMultiplier + 1));
    this.changeStat('health',   -PET_DECAY.health * deltaTime * hungerMultiplier);
  }

  deathHandler() {
    this.isDead = true;
  }

  updateFrame(deltaTime: number): void {
    if(this.frameInterval < this.frameTimer) {
      this.frameTimer = 0;

      if(this.frames.frameX < this.frames.maximumXFrame) {
        this.frames.frameX++
      }
      else {
        this.frames.frameX = 0
      }
    }
    else {
      this.frameTimer += deltaTime;
    }
  }

  update(deltaTime: number): void {
    this.updateFrame(deltaTime)
    this.decayStats(deltaTime)

    this.setState(this.resolveState());
    // this.currentState.update(deltaTime);
  }

  setState(stateId: number): void {
    this.currentState = this.states[stateId]
    if(stateId === EPetStates.death) {
      this.deathHandler();
    }
  }

  draw(context: CanvasRenderingContext2D, deltaTime: number): void {
    // context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, 116, 116, this.x, this.y, 400, 400)
    context.strokeRect(this.coords.x, this.coords.y, this.coords.width, this.coords.height)
    context.font = 'bold 40px sans-serif';
    context.fillText(this.currentState.constructor.name, (this.coords.x + 10), (this.coords.y + this.coords.y / 2))
    console.warn(deltaTime)

    const statsStr = (Object.keys(this.stats) as Array<keyof IPetStats>).reduce((pvStat: string[], currentStat: keyof IPetStats) => {
      return [...pvStat, `${currentStat}: ${Math.round(this.stats[currentStat])}`]
    }, [] as string[])
    statsStr.forEach((str, idx) => {
      context.font = 'bold 14px sans-serif';
      context.fillText(str, (this.coords.x + 10), (this.coords.y + this.coords.y / 2 + 40 + (idx * 14)))
    })
  }
}
