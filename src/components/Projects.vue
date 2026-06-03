<script setup lang="ts">
  import {ref} from "vue";
  import {EProjectCategories, EProjectStatus} from "@/types/project.ts";
  import Filters from "@/components/general/Filters.vue";
  import { projects } from "@/service/data/projects/projects-info.ts";


  const activeFilters = ref({
    search: '',
    category: EProjectCategories.all,
    status: EProjectStatus.published,
  })

</script>

<template>
  <section class="projects">
    <div class="projects__filters">
      <Filters v-model:activeFilters="activeFilters" />
    </div>
    <div class="projects__list">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project"
      >
        {{ project.name }}
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
