import { computed } from 'vue'
import { useColorMode } from '@vueuse/core'

export type TThemeMode = 'light' | 'dark' | 'system'
export type TResolvedTheme = 'light' | 'dark'

export function useTheme() {
  const mode = useColorMode({
    attribute: 'data-theme',
    emitAuto: true,
    storageKey: 'theme',
  })

  const selectedTheme = computed<TThemeMode>({
    get: () => (mode.store.value === 'auto' ? 'system' : mode.store.value) as TThemeMode,
    set: (value) => {
      mode.store.value = value === 'system' ? 'auto' : value
    },
  })

  const resolvedTheme = computed<TResolvedTheme>(() => {
    const value = mode.store.value === 'auto' ? mode.system.value : mode.store.value
    return value === 'dark' ? 'dark' : 'light'
  })

  return {
    selectedTheme,
    resolvedTheme,
    systemTheme: mode.system,
  }
}
