<script setup lang="ts">

type StyleVariants = 'primary' | 'secondary' | 'empty';
type SizeVariants = 'xl' | 'm' | 's';

const { variant = 'primary', size = 'm' } = defineProps<{
  variant?: StyleVariants;
  size?: SizeVariants
}>()
</script>

<template>
  <button
    type="button"
    :class="['ui-button', variant, size]"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 16px 32px;
  border: none;
  border-radius: 20px;
  background: transparent;
  color: $main-white-color;
  cursor: pointer;
  transition: all 0.2s;

  &.primary {
    background: $brand-color;
    border: 2px solid $brand-color;
    color: $color-bg;

    &:hover {
      background: $brand-color-second;
      border: 2px solid $brand-color-second;
    }
  }

  &.secondary {
    background: $color-bg;
    border: 2px solid $brand-color;
  }

  &.empty {
    background: transparent;
    border: 0;
    padding: 0;
  }

  &.s {
    min-height: 18px;
    padding: 2px 6px;

    @media (min-width: $tablet-breakpoint) {
      min-height: 36px;
      padding: 4px 16px;
    }
  }
}
</style>
