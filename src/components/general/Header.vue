<script setup lang="ts">
  import Navigation from "@/components/general/Navigation.vue";
  import Icon from "@/components/UI/icons/Icon.vue";
  import {socials} from "@/types/constants/socials.ts";
  import LangSelector from "@/components/general/LangSelector.vue";

</script>

<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="header__logo">
        {{ $t('name_full') }}
      </div>
      <div class="header__nav">
<!--        <Navigation />-->
        <LangSelector />
        <a class="header__git" target="_blank" :href="socials.git.link">
          <Icon :name="socials.git.icon" />
        </a>
        <a class="header__tg" target="_blank" :href="socials.telegram.link">
          <Icon :name="socials.telegram.icon" />
        </a>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
  .header-wrapper {
    padding: 24px 12px 0;

    @media (min-width: $desktopBreakpoint) {
      padding: 24px 36px 0;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #43454D;
    padding: 0 0 24px;

    &__nav {
      display: flex;
      align-items: center;
      gap: 8px;

      @media (min-width: $tabletBreakpoint) {
        gap: 16px;
      }
      @media (min-width: $desktopBreakpoint) {
        gap: 24px;
      }
    }
    &__logo {
      color: $brand-color;

      @media (min-width: $tabletBreakpoint) {
        font-size: $Article-U;
      }
    }
    &__git {
      display: block;
    }
    &__tg {
      display: none;
      @media (min-width: $tabletBreakpoint) {
        display: block;
      }
    }
    &__git, &__tg {
      width: 16px;
      height: 16px;

      @media (min-width: $tabletBreakpoint) {
        width: 30px;
        height: 30px;
      }
    }
  }
</style>
