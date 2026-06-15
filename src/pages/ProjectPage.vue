<script setup lang="ts">
import { computed, onMounted } from "vue";
  import type { IProject } from "@/types/project.ts";
  import { useRoute } from "vue-router";
  import { projects } from "@/service/data/projects/projects-info.ts";
  import { initGame } from "@/projects/tamagochi/game";

  const route = useRoute()

  const project = computed(() =>
    projects.find((item: IProject) => {
      return item.key === route.params.slug
    }),
  )
  const initProject = async () => {
    const p = project.value;
    try {
      console.warn("Initializing...", p?.name)
      await initGame()
    }
    catch(err) {
      console.error(`Cannot initialize project: ${err}`)
    }
  }

  onMounted(async() => {
    await initProject();
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
          <div class="game__settings">
            <!--todo-->
            <button class="game__settings-button">фулскрин</button>
            <button class="game__settings-button">настройки</button>
          </div>
          <canvas id="project-canvas">

          </canvas>
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
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;

    // width: 1440px;
    // height: 920px;

    &__settings {
      position: absolute;
      right: 0;
      top: 0;

      // display: flex;
      // flex-direction: column;
      // align-items: flex-end;
      display: none;
    }
  }

  #project-canvas {
    border: 2px solid var(--color-brand);
  }
</style>
