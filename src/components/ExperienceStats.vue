<script setup lang="ts">

</script>

<template>
  <div class="experience-wrapper">
    <div class="experience">
      <div class="experience__item">
        <span class="experience__item_number">
          15
        </span>
        <span>
          Development Tools
        </span>
      </div>
      <div class="experience__item">
        <span class="experience__item_number">
          18
        </span>
        <span>
          {{ $t('stats_tools')}}
        </span>
      </div>
      <div class="experience__item">
        <span class="experience__item_number">
          7
        </span>
        <span>
          {{ $t('stats_exp')}}
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
    background: #1A1E23;
    border-radius: 80px;
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    gap: 48px;

    &__item {
      display: flex;
      align-items: center;
      font-size: $Para-U;
      white-space: wrap;

      &_number {
        display: block;
        color: $brand-color;
        font-size: $H2-U;
        width: 42px;
        margin: 0 16px 0 0;
        text-align: right;
      }
    }
  }
</style>
