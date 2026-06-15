import { EPetStates } from "@/projects/tamagochi/types/constants.ts";
import type { Pet } from "@/projects/tamagochi/game/pet.ts";

export class State {
  state: EPetStates
  pet: Pet
  constructor(state: EPetStates, pet: Pet) {
    this.state = state
    this.pet = pet
  }
}

export class IdleState extends State {
  constructor(pet: Pet) {
    super(EPetStates.idle, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }
}

export class ThinkState extends State {
  constructor(pet: Pet) {
    super(EPetStates.think, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }
}

export class SleepState extends State {
  constructor(pet: Pet) {
    super(EPetStates.sleep, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }
}

export class EatState extends State {
  constructor(pet: Pet) {
    super(EPetStates.eat, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }
}

export class SickState extends State {
  constructor(pet: Pet) {
    super(EPetStates.sick, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}

export class HealState extends State {
  constructor(pet: Pet) {
    super(EPetStates.heal, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}

export class PlayState extends State {
  constructor(pet: Pet) {
    super(EPetStates.play, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}

export class CuddleState extends State {
  constructor(pet: Pet) {
    super(EPetStates.cuddle, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}

export class BathState extends State {
  constructor(pet: Pet) {
    super(EPetStates.bath, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}

export class DeathState extends State {
  constructor(pet: Pet) {
    super(EPetStates.death, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}

export class AppearanceState extends State {
  constructor(pet: Pet) {
    super(EPetStates.appearance, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}

export class GrowState extends State {
  constructor(pet: Pet) {
    super(EPetStates.grow, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}

export class SpecialAction1State extends State {
  constructor(pet: Pet) {
    super(EPetStates.specialAction1, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}

export class SpecialAction2State extends State {
  constructor(pet: Pet) {
    super(EPetStates.specialAction2, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}

export class ToiletState extends State {
  constructor(pet: Pet) {
    super(EPetStates.toilet, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}

export class DiscomfortState extends State {
  constructor(pet: Pet) {
    super(EPetStates.discomfort, pet);
  }

  enter() {
    this.pet.frames.maximumXFrame = 7
    this.pet.frames.frameY = 0
  }

}
