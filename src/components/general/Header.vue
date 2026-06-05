<script setup lang="ts">
  // import Navigation from "@/components/general/Navigation.vue";
  import Icon, { type IconName } from "@/components/UI/icons/Icon.vue";
  import { type ISocial, socials } from "@/types/constants/socials.ts";
  import LangSelector from "@/components/general/LangSelector.vue";
  import { useLocale } from "@/composables/useLocale.ts";
  import ThemeSwitcher from "@/components/general/ThemeSwitcher.vue";

  const { t } = useLocale()

  const getIconName = (social: ISocial) => social.icon as IconName
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
        <div class="container">
          <!--          <Navigation />-->
          <ThemeSwitcher />
        </div>
        <LangSelector />
        <a
          class="header__git"
          target="_blank"
          :href="socials.git.link"
        >
          <Icon
            :name="getIconName(socials.git)"
            hover-color="var(--color-brand-second)"
          />
        </a>
        <a
          class="header__tg"
          target="_blank"
          :href="socials.telegram.link"
        >
          <Icon
            :name="getIconName(socials.telegram)"
            hover-color="var(--color-brand-second)"
          />
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

.container {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: $tablet-breakpoint) {
    flex-direction: row;
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
    max-width: 95px;
    color: var(--color-brand);

    @media (min-width: $tablet-breakpoint) {
      font-size: $s;
      max-width: unset;
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

  &__git,
  &__tg {
    width: 30px;
    height: 30px;

    @media (min-width: $tablet-breakpoint) {
      width: 30px;
      height: 30px;
    }
  }
}

.no-flex-gap {
  .container {
    > * + * {
      margin-top: 8px;
    }

    @media (min-width: $tablet-breakpoint) {
      > * + * {
        margin-top: 0;
        margin-left: 8px;
      }
    }
  }

  .header {
    &__nav {
      > * + * {
        margin-left: 8px;
      }

      @media (min-width: $tablet-breakpoint) {
        > * + * {
          margin-left: 16px;
        }
      }

      @media (min-width: $desktop-breakpoint) {
        > * + * {
          margin-left: 24px;
        }
      }
    }
  }
}
</style>
