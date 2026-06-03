<script setup lang="ts">
  import {EProjectCategories, EProjectStatus, type FiltersState} from "@/types/project.ts";
  import {isHTMLSelect, isProjectCategory, isProjectStatus} from "@/types/helpers.ts";
  import UIInput from "@/components/UI/input/UIInput.vue";
  import UIDropDown from "@/components/UI/dropDown/UIDropDown.vue";

  const {activeFilters} = defineProps<{
    activeFilters: FiltersState
  }>()
  const emit = defineEmits<{
    (e: 'update:activeFilters', value: FiltersState): void
  }>()

  const onChangeSearch = (value: string) => {
    emit('update:activeFilters', {
      ...activeFilters,
      search: value,
    })
  }

  const onChangeCategory = (event: Event) => {
    if (!isHTMLSelect(event.currentTarget)) return;
    const { value } = event.currentTarget;
    if (!isProjectCategory(value)) return;

    emit('update:activeFilters', {
      ...activeFilters,
      category: value,
    })
  };

  const onChangeStatus = (event: Event) => {
    if (!isHTMLSelect(event.currentTarget)) return;
    const { value } = event.currentTarget;
    if (!isProjectStatus(value)) return;

    emit('update:activeFilters', {
      ...activeFilters,
      status: value,
    })
  }

</script>

<template>
  <div class="filters">
    <UIInput
      :model-value="activeFilters.search"
      @update:modelValue="onChangeSearch"
    />
    <div class="filters__selectors">
      <UIDropDown
        :list="Object.values(EProjectCategories)"
        v-model="activeFilters.category"
        @user-input="onChangeCategory"
      />
      <UIDropDown
        :list="Object.values(EProjectStatus)"
        v-model="activeFilters.status"
        @user-input="onChangeStatus"
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

    @media (min-width: $tabletBreakpoint) {
      max-width: 650px;
      flex-direction: row;
      gap: 16px;
    }
    @media (min-width: $tabletBreakpoint) {
      max-width: 1100px;
      gap: 24px;
    }

    &__selectors {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      width: 100%;

      @media (min-width: $tabletBreakpoint) {
        flex-direction: row;
        gap: 16px;
      }
      @media (min-width: $tabletBreakpoint) {
        gap: 24px;
      }
    }
  }
</style>
