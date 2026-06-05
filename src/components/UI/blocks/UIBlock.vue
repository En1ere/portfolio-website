<script setup lang="ts">
import Icon, { type IconName } from "@/components/UI/icons/Icon.vue";

  type SkillProp = {
    id: number,
    icon: string,
    title: string,
    items: readonly string[]
  }

  const { skill } = defineProps<{ skill: SkillProp }>()
  const getIconName = (social: SkillProp) => social.icon as IconName
</script>

<template>
  <div class="UI-block">
    <Icon
      class="UI-block__icon"
      :name="getIconName(skill)"
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
    border-left: 16px solid var(--color-brand);
    background: var(--color-brand-second);
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
      color: var(--color-text-invert);
      white-space: nowrap;
    }

    &__title {
      font-size: $s;
    }

    &__items {
      font-size: $xs;
    }
  }
</style>
