<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { navItems } from "@/router/routes";

const route = useRoute();

const navRoutes = computed(() =>
  navItems.filter((item) => item.path !== route.path),
);
</script>

<template>
  <nav class="navigation">
    <RouterLink
      v-for="item in navRoutes"
      :key="item.name"
      :to="item.path"
    >
      {{ item.label }}
    </RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
  .navigation {
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-size: 24px;
  }
</style>
