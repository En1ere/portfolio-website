<script setup lang="ts">
  import {computed} from "vue";
  import {useLocale} from "@/composables/useLocale.ts";
  import Icon from "@/components/UI/icons/Icon.vue";
  const { t } = useLocale()

  const {
    placeholder = "",
    modelValue = ""
  } = defineProps<{
    placeholder?: string,
    modelValue: string
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const getPlaceholder = computed(() => placeholder ? t(placeholder) : "Search...")

  const onInput = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
</script>

<template>
  <div class="input-wrapper">
    <input
      class="ui-input"
      type="text"
      :placeholder="getPlaceholder"
      :value="modelValue"
      @input="onInput"
    >
    <Icon class="input-icon" name="IconSearch" />
  </div>
</template>

<style scoped lang="scss">
  .input-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 32px;
    background: #FFFFFF;
    border-radius: 24px;
    overflow: hidden;
    padding: 0 16px 0 0;
  }
  .ui-input {
    height: 100%;
    width: 100%;
    padding: 4px 16px;
    color: $color-bg;
  }
  .input-icon {
    height: 20px;
    width: 20px;
  }
</style>
