<script setup lang="ts">
import { useLocale } from "@/composables/useLocale.ts";
import Navigation from "@/components/general/Navigation.vue";

const { t } = useLocale()
</script>

<template>
  <section class="page-not-found">
    <h1 class="page-not-found__code">
      404
    </h1>
    <p class="page-not-found__subtitle">
      {{ t('page_not_found') }}
    </p>
    <Navigation />
  </section>
</template>

<style lang="scss" scoped>
  .page-not-found {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__code {
      font-size: 140px;
      color: var(--color-brand);

      @media (min-width: $tablet-breakpoint) {
        font-size: 140px;
      }

      @media (min-width: $desktop-breakpoint) {
        font-size: 200px;
      }
    }

    &__subtitle {
      margin: 60px 0 126px;
      font-size: 26px;
      text-align: center;

      @media (min-width: $tablet-breakpoint) {
        font-size: 50px;
        margin: 60px 0 160px;
      }

      @media (min-width: $desktop-breakpoint) {
        font-size: 140px;
        margin: 60px 0 200px;
      }
    }
  }
</style>
