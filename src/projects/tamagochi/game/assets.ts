import bgRoom from '@/projects/tamagochi/assets/backgrounds/tamagotchi-background.png'
import petCat from '@/projects/tamagochi/assets/pets/tamagotchi-cat.png'

export const CTamagotchiAssetUrls = {
  bgRoom,
  petCat,
} as const

export type TTamagotchiAssetKey = keyof typeof CTamagotchiAssetUrls
