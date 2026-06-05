<script setup lang="ts">
  // import Navigation from "@/components/general/Navigation.vue";
  import Icon from "@/components/UI/icons/Icon.vue";
  import { socials } from "@/types/constants/socials.ts";
  import LangSelector from "@/components/general/LangSelector.vue";
  import {useLocale} from "@/composables/useLocale.ts";

  const { t } = useLocale()
</script>

<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="header__logo">
        <RouterLink to="/home">
          {{ t('name_full') }}
        </RouterLink>
      </div>
      <div class="header__nav">
        <!--        <Navigation />-->
        <LangSelector />
        <a
          class="header__git"
          target="_blank"
          :href="socials.git.link"
        >
          <Icon :name="socials.git.icon" :hover-color="'#98FAEC'" />
        </a>
        <a
          class="header__tg"
          target="_blank"
          :href="socials.telegram.link"
        >
          <Icon :name="socials.telegram.icon" :hover-color="'#98FAEC'" />
        </a>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
  .header-wrapper {
    padding: 24px 12px 0;

    @media (min-width: $desktop-breakpoint) {
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

      @media (min-width: $tablet-breakpoint) {
        gap: 16px;
      }

      @media (min-width: $desktop-breakpoint) {
        gap: 24px;
      }
    }

    &__logo {
      color: $brand-color;

      @media (min-width: $tablet-breakpoint) {
        font-size: $article-u;
      }
    }

    &__git {
      display: block;
    }

    &__tg {
      display: none;

      @media (min-width: $tablet-breakpoint) {
        display: block;
      }
    }

    &__git, &__tg {
      width: 30px;
      height: 30px;

      @media (min-width: $tablet-breakpoint) {
        width: 30px;
        height: 30px;
      }
    }
  }
</style>
