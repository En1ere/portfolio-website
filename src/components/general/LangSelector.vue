<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import UIButton from "@/components/UI/button/UIButton.vue";

const { locale, toggleLocale } = useLocale();

</script>

<template>
  <UIButton @click="toggleLocale()" size="s">
    {{locale}}
  </UIButton>
</template>

<style scoped lang="scss">
  button {
    text-transform: capitalize;
    width: 32px;

    @media (min-width: $tabletBreakpoint) {
      width: 58px;
      margin: 0 0 0 16px;
    }
  }
</style>
