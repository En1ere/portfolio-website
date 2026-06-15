import type { IPetStats, PetStatKey } from "@/projects/tamagochi/types/types.ts";
import { EPetStates } from "@/projects/tamagochi/types/constants.ts";

export const PET_STAT_LIMITS: Record<PetStatKey, { min: number; max: number, threshold: number }> = {
  hunger: { min: 0, max: 100, threshold: 30 },
  energy: { min: 0, max: 100, threshold: 20 },
  hygiene: { min: 0, max: 100, threshold: 30 },
  health: { min: 0, max: 100, threshold: 30 },
  mood: { min: 0, max: 100, threshold: 30 },
  age: { min: 0, max: 100, threshold: 80 },
} as const;

export const PET_DECAY: Record<PetStatKey, number> = {
  hunger: 2,
  energy: 1,
  hygiene: 0.4,
  mood: 0.2,
  health: 1,
  age: 0,
} as const;

type StateRule = {
  state: EPetStates;
  when: (stats: IPetStats) => boolean;
};

export const STATE_RULES: StateRule[] = [
  {
    state: EPetStates.death,
    when: (s) => s.health <= 0,
  },
  {
    state: EPetStates.sleep,
    when: (s) => s.energy < 15,
  },
  {
    state: EPetStates.sick,
    when: (s) => s.health < 30 || s.hygiene < 20,
  },
  {
    state: EPetStates.discomfort,
    when: (s) => s.hunger < 30 || s.hygiene < 30,
  },
  {
    state: EPetStates.idle,
    when: () => true,
  },
] as const;
