<script setup lang="ts">
import { EProjectCategoriesFilter, EProjectStatusesFilter, type FiltersState } from "@/types/project.ts";
  import { isProjectCategory, isProjectStatus } from "@/types/helpers.ts";
  import UIInput from "@/components/UI/input/UIInput.vue";
  import UIDropDown from "@/components/UI/dropDown/UIDropDown.vue";

  const props = defineProps<{
    activeFilters: FiltersState
  }>()
  const emit = defineEmits<{
    (e: 'update:activeFilters', value: FiltersState): void
  }>()

  const onChangeSearch = (value: string) => {
    emit('update:activeFilters', {
      ...props.activeFilters,
      search: value,
    })
  }

  const onChangeCategory = (value: string) => {
    if (!isProjectCategory(value)) {return;}

    emit('update:activeFilters', {
      ...props.activeFilters,
      category: value,
    })
  };

  const onChangeStatus = (value: string) => {
    if (!isProjectStatus(value)) {return;}

    emit('update:activeFilters', {
      ...props.activeFilters,
      status: value,
    })
  }

</script>

<template>
  <div class="filters">
    <UIInput
      :model-value="props.activeFilters.search"
      @update:modelValue="onChangeSearch"
    />
    <div class="filters__selectors">
      <UIDropDown
        :model-value="props.activeFilters.category"
        :list="Object.values(EProjectCategoriesFilter)"
        @update:modelValue="onChangeCategory"
      />
      <UIDropDown
        :model-value="props.activeFilters.status"
        :list="Object.values(EProjectStatusesFilter)"
        @update:modelValue="onChangeStatus"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .filters {
    padding: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    gap: 8px;

    @media (min-width: $tablet-breakpoint) {
      max-width: 650px;
      flex-direction: row;
      gap: 16px;
    }

    @media (min-width: $tablet-breakpoint) {
      max-width: 1100px;
      gap: 24px;
    }

    &__selectors {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      width: 100%;

      @media (min-width: $tablet-breakpoint) {
        flex-direction: row;
        gap: 16px;
      }

      @media (min-width: $tablet-breakpoint) {
        gap: 24px;
      }
    }
  }
</style>
