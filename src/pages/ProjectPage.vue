<script setup lang="ts">
import { computed, onMounted } from "vue";
  import type { IProject } from "@/types/project.ts";
  import { useRoute } from "vue-router";
  import { projects } from "@/service/data/projects/projects-info.ts";

  const route = useRoute()

  const project = computed(() =>
    projects.find((item: IProject) => {
      return item.key === route.params.slug
    }),
  )
  const initProject = () => {
    const p = project.value;
    if(!p) {
      console.error("Cannot initialize project")
      return;
    }
    console.warn("Initializing...", p?.name)
  }

  onMounted(() => {
    initProject();
  })
</script>

<template>
  <section class="project-wrapper">
    <div class="project">
      <h1 class="project__title">
        {{ project?.name }}
      </h1>
      <div class="project__content">
        <div class="game">
          <button class="game__setting-button">фулскрин</button>
          <button class="game__setting-button">настройки</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .project-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 24px;
  }

  .project {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      color: var(--color-brand);
      font-size: $m;
    }

  }

  .game {
    margin: 24px 0 0;
    width: 1280px;
    height: 920px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border: 5px solid var(--color-brand);

  }
</style>
