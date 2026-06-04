export const blockKeys = ['welcome', 'about', 'skills', 'works'] as const;
export type TBlockTitle = typeof blockKeys[number];

export interface IBlock {
  id: number
  icon: string
}

export const blocks:Record<TBlockTitle, IBlock> = {
  welcome: {
    id: 1,
    icon: "IconSquares",
  },
  about: {
    id: 2,
    icon: "IconProfile",
  },
  skills: {
    id: 3,
    icon: "IconBrackets",
  },
  works: {
    id: 4,
    icon: "IconPC",
  },
} as const
