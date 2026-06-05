<script setup lang="ts">
import { computed, ref, type CSSProperties } from "vue";
import { useTheme } from '@/composables/useTheme'
import Icon, { type IconName } from "@/components/UI/icons/Icon.vue";
import { type ITheme, themes, type TThemeMode } from "@/types/constants/themes.ts";

const { getSelectedTheme, setTheme } = useTheme()

const isOpen = ref(false)
const open = () => isOpen.value = true
const close = () => isOpen.value = false

const themeEntries = computed(() => Object.entries(themes) as [TThemeMode, ITheme][])
const activeIndex = computed(() =>
  themeEntries.value.findIndex(([themeKey]) => themeKey === getSelectedTheme.value),
)

const isActive = (themeKey: TThemeMode) => themeKey === getSelectedTheme.value;
const getIconName = (theme:ITheme) => theme.icon as IconName

const getShift = (index: number) => {
  const length = themeEntries.value.length
  const diff = (index - activeIndex.value + length) % length

  if (diff === 0) {return 0}

  const side = diff % 2 === 1 ? 1 : -1
  const step = Math.ceil(diff / 2)

  return side * step * 38
}

const getButtonStyle = (index: number): CSSProperties => ({
  transform: isOpen.value ? `translateX(${getShift(index)}px)` : 'translateX(0)',
  opacity: isOpen.value || index === activeIndex.value ? 1 : 0,
  pointerEvents: isOpen.value || index === activeIndex.value ? 'auto' : 'none',
})

const setThemeHandler = (themeKey:TThemeMode) => {
  setTheme(themeKey);
  close();
}
</script>

<template>
  <div class="theme-switcher-wrapper">
    <div class="theme-switcher">
      <button
        v-for="([themeKey, theme], index) in themeEntries"
        :key="theme.id"
        :class="['theme-switcher__button', { active: isActive(themeKey) }]"
        :style="getButtonStyle(index)"
        @click="isActive(themeKey) && !isOpen ? open() : setThemeHandler(themeKey)"
      >
        <Icon
          :color="isActive(themeKey) ? 'var(--color-text-invert)' : 'var(--color-bg-invert)'"
          :name="getIconName(theme)"
        />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.theme-switcher-wrapper {
  width: 148px;
  height: 38px;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.theme-switcher {
  position: relative;
  width: 148px;
  height: 38px;
}

.theme-switcher__button {
  position: absolute;
  top: 4px;
  left: 59px;
  border: 1px solid var(--color-bg-invert);
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 4px;
  cursor: pointer;
  transition:
    transform 320ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 320ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color 320ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 320ms cubic-bezier(0.16, 1, 0.3, 1);
}

.theme-switcher__button.active {
  background: var(--color-brand);
  border: 1px solid var(--color-brand);
}
</style>
