<script setup lang="ts">
  import { computed, ref } from "vue";
  import { EProjectCategoriesFilter, EProjectStatusesFilter } from "@/types/project.ts";
  import Filters from "@/components/general/Filters.vue";
  import { projects } from "@/service/data/projects/projects-info.ts";
  import ProjectCard from "@/components/projects/ProjectCard.vue";


  const activeFilters = ref({
    search: '',
    category: EProjectCategoriesFilter.all,
    status: EProjectStatusesFilter.all,
  })

  const filteredProjects = computed(() => {
    const search = activeFilters.value.search.trim().toLowerCase()
    const category = activeFilters.value.category
    const status = activeFilters.value.status

    return projects.filter(project => {
      const searchMatch = search ? project.name.toLowerCase().includes(search) : true;
      const categoryMatch = category !== EProjectCategoriesFilter.all ? project.category === category : true;
      const statusMatch = status !== EProjectStatusesFilter.all ? project.status === status : true;

      return searchMatch && categoryMatch && statusMatch
    })
  })

</script>

<template>
  <section class="projects">
    <div class="projects__filters">
      <Filters v-model:activeFilters="activeFilters" />
    </div>
    <div class="projects__list">
      <ProjectCard
        v-for="project in [...filteredProjects]"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .projects {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 48px;

    &__filters {
      padding: 24px 0;
      border-bottom: 2px solid var(--color-text);

      @media (min-width: $tablet-breakpoint) {
        padding: 48px 0;
      }
    }

    &__list {
      padding: 0 16px;
      margin: 24px 0 0;
      width: 100%;
      max-width: 1478px;
      display: flex;
      flex-wrap: wrap;
      gap: 48px;

      @media (min-width: $tablet-breakpoint) {
        margin: 48px 0 0;
      }
    }
  }
</style>

