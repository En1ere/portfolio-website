<script setup lang="ts">

import Projects from "@/components/Projects.vue";
</script>

<template>
  <div class="projects-wrapper">
    <Projects />
  </div>
</template>

<style scoped lang="scss">
  .projects-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: calc(100vh - 191px);
  }
</style>
