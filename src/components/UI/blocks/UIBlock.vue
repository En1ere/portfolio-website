<script setup lang="ts">
import Icon, { type IconName } from "@/components/UI/icons/Icon.vue";

  type SkillProp = {
    id: number,
    icon: string,
    title: string,
    items: readonly string[]
  }

  const { skill } = defineProps<{ skill: SkillProp }>()
</script>

<template>
  <div class="UI-block">
    <Icon
      class="UI-block__icon"
      :name="skill.icon as IconName"
    />
    <span class="UI-block__title">
      {{ skill.title }}
    </span>
    <span class="UI-block__items">
      {{ skill.items.join(' · ')}}
    </span>
  </div>
</template>

<style scoped lang="scss">
  .UI-block {
    border-radius: 16px;
    border: 0;
    border-left: 16px solid #0C73B8;
    background: $brand-color-second;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    min-width: 264px;

    &__icon {
      width: 32px;
      height: 32px;
    }

    &__title, &__items {
      margin: 8px 0 0;
      color: $color-bg;
      white-space: nowrap;
    }

    &__title {
      font-size: $article-u;
    }

    &__items {
      font-size: $para-u;
    }
  }
</style>
