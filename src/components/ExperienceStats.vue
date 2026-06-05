<script setup lang="ts">
    import { useLocale } from "@/composables/useLocale.ts";

    const { t } = useLocale()
</script>

<template>
  <div class="experience-wrapper">
    <div class="experience">
      <div class="experience__item">
        <span class="experience__item_number">
          57
        </span>
        <span>
          {{ t('stats_projects') }}
        </span>
      </div>
      <div class="experience__item">
        <span class="experience__item_number">
          18
        </span>
        <span>
          {{ t('stats_tools')}}
        </span>
      </div>
      <div class="experience__item">
        <span class="experience__item_number">
          7
        </span>
        <span>
          {{ t('stats_exp')}}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .experience-wrapper {
    display: flex;
    justify-content: center;
  }

  .experience {
    background: var(--color-darker-bg);
    border-radius: 80px;
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    gap: 48px;

    &__item {
      display: flex;
      align-items: center;
      font-size: $xs;
      white-space: wrap;

      &_number {
        display: block;
        color: var(--color-brand);
        font-size: $m;
        width: 42px;
        margin: 0 16px 0 0;
        text-align: right;
      }
    }
  }
</style>
