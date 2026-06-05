<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import Icon from "@/components/UI/icons/Icon.vue";

const { selectedTheme, resolvedTheme, systemTheme } = useTheme()
</script>

<template>
  <div class="theme-switcher">
    <button
      type="button"
      :class="{ active: selectedTheme === 'light' }"
      @click="selectedTheme = 'light'"
    >
      Light

      <Icon name="IconSun" />
    </button>

    <button
      type="button"
      :class="{ active: selectedTheme === 'dark' }"
      @click="selectedTheme = 'dark'"
    >
      Dark
      <Icon name="IconMoon" />
    </button>

    <button
      type="button"
      :class="{ active: selectedTheme === 'system' }"
      @click="selectedTheme = 'system'"
    >
      System
      <Icon name="IconPC" />
    </button>

    <p>
      Выбрано: {{ selectedTheme }} <br>
      Система: {{ systemTheme }} <br>
      Применяется: {{ resolvedTheme }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.theme-switcher {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

button {
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  background: #0C73B8;
  color: var(--color-text);
  cursor: pointer;
}

button.active {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
</style>
