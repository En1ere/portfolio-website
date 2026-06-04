<script setup lang="ts">
  import { computed, ref } from "vue";
  import { EProjectCategoriesFilter, EProjectStatusesFilter } from "@/types/project.ts";
  import Filters from "@/components/general/Filters.vue";
  import { projects } from "@/service/data/projects/projects-info.ts";


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
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="project"
      >
        {{ project.name }}
      </div>
    </div>
  </section>
</template>

