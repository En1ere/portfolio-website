<script setup lang="ts">
import { useRoute } from "vue-router";
import { type INavRoute, navItems } from "@/router/routes";
import {useLocale} from "@/composables/useLocale.ts";

const route = useRoute();
const { t } = useLocale()

const isCurrent = (item:INavRoute) => item.path === route.path;
</script>

<template>
  <nav class="navigation">
    <RouterLink
      v-for="item in navItems"
      :key="item.name"
      :to="item.path"
      :class="['navigation__item', { active: isCurrent(item) }]"
    >
      {{ t(item.label) }}
    </RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
  .navigation {
    display: flex;
    gap: 8px;
    font-size: 16px;

    @media (min-width: $tablet-breakpoint) {
      font-size: $s;
      gap: 16px;
    }

    &__item {
      transition: all 0.2s;

      &:hover {
        color: var(--color-brand-second);
      }
      &:active {
        color: var(--color-brand);
      }

      &.active {
        color: var(--color-brand);
      }
    }
  }
</style>
