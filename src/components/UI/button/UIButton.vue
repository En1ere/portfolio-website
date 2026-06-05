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
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.2s;

  &.primary {
    background: var(--color-brand);
    border: 2px solid var(--color-brand);
    color: var(--color-text-invert);

    &:hover {
      background: var(--color-brand-second);
      border: 2px solid var(--color-brand-second);
    }
  }

  &.secondary {
    background: var(--color-bg);
    border: 2px solid var(--color-brand);
  }

  &.empty {
    background: transparent;
    border: 0;
    padding: 0;

    &:hover {
      color: var(--color-brand-second);
    }
    &:active {
      color: var(--color-brand);
    }
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
