import { computed, type ComputedRef } from 'vue'
import { useColorMode } from '@vueuse/core'
import type { TThemeMode } from "@/types/constants/themes.ts";



export function useTheme() {
  const mode = useColorMode({
    attribute: 'data-theme',
    emitAuto: true,
    storageKey: 'theme',
  })

  // const selectedTheme = computed<TThemeMode>(
  //   set: (value: TThemeMode) => {
  //     mode.store.value = value === 'system' ? 'auto' : value
  //   },
  // })

  const getSelectedTheme: ComputedRef<string | "light" | "dark"> = computed(() => mode.store.value === 'auto' ? 'system' : mode.store.value)
  const setTheme = (themeKey: TThemeMode) => mode.store.value = themeKey === 'system' ? 'auto' : themeKey


  return {
    getSelectedTheme,
    setTheme,
  }
}
