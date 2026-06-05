<script setup lang="ts">

import Icon from "@/components/UI/icons/Icon.vue";

const scrollUp = () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
})
</script>

<template>
  <button
    class="scroll-up-button"
    @click="scrollUp"
  >
    <Icon name="IconArrowUp" hover-color="var(--color-brand-second)" />
  </button>
</template>

<style scoped lang="scss">
  .scroll-up-button {
    background: var(--color-bg);
    border: 0;
    box-shadow: $white-shadow;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;

    @media (min-width: $tablet-breakpoint) {
      padding: 14px;
      width: 70px;
      height: 70px;
    }
  }
</style>
