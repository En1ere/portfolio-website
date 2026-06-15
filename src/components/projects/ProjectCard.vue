<script setup lang="ts">
    import type { IProject } from "@/types/project.ts";
    const { project } = defineProps<{
      project: IProject
    }>()
</script>

<template>
  <RouterLink
    class="project-card"
    :to="`/projects/${project.key}`"
  >
    <div class="project-card__image">
      <img
        v-if="project.image"
        :src="project.image"
        alt=""
      >
    </div>
    <div class="project-card__text-block">
      <p class="project-card__title">
        {{ project.name }}
      </p>
      <p class="project-card__description">
        {{ project.description }}
      </p>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
  .project-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    border: 0;
    overflow: hidden;
    max-width: 300px;
    cursor: pointer;
    transition: all 0.3s;

    [lang^="ru"] & {
      border: 1px solid var(--color-brand);
    }

    @media (min-width: $tablet-breakpoint) {
      max-width: 450px;
      width: 450px;
    }

    &:hover {
      box-shadow: var(--brand-shadow);
    }

    &__image {
      width: 100%;
      height: 150px;
      min-height: 150px;
      background: var(--project-image-plug);

      @media (min-width: $tablet-breakpoint) {
        height: 350px;
        min-height: 350px;
      }
    }

    &__text-block {
      width: 100%;
      height: 100%;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    &__title {
      font-size: $m;
      color: var(--color-brand);
    }

    &__description {
      font-size: $xs;
      margin: 16px 0;
    }
  }
</style>
