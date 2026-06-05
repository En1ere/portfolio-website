export const ThemeModes = ['light', 'dark', 'system'] as const;
export type TThemeMode = typeof ThemeModes[number]

export interface ITheme {
  id: number,
  icon: string
}

export const themes:Record<TThemeMode, ITheme> = {
  light: {
    id: 1,
    icon: "IconSun",
  },
  dark: {
    id: 2,
    icon: "IconMoon",
  },
  system: {
    id: 3,
    icon: "IconPC",
  },
} as const
