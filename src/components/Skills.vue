<script setup lang="ts">
import UIBlock from "@/components/UI/blocks/UIBlock.vue";
import { skills } from "@/types/constants/skills.ts";
import { useLocale } from "@/composables/useLocale.ts";
import { useTemplateRef } from "vue";
import { type TBlockTitle } from "@/types/constants/homePage.ts";

const { t } = useLocale();
const sectionId: TBlockTitle = 'skills';
const rootRef = useTemplateRef<HTMLElement>('rootRef')
defineExpose({
  rootRef,
});
</script>

<template>
  <section
    ref="rootRef"
    class="skills-wrapper"
    :id="sectionId"
  >
    <div class="skills">
      <h1 class="skills__title">
        {{ t('skills_title') }}
      </h1>
      <span class="skills__subtitle">
        {{ t('skills_subtitle') }}
      </span>
      <div class="blocks-wrapper">
        <UIBlock
          v-for="skill in skills"
          :key="skill.id"
          :skill="skill"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .skills-wrapper {
    position: relative;
    overflow: hidden;
    padding: 64px;
    background: url("@/assets/img/skills/skills-background.png") center / cover no-repeat;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgb(41 47 54 / 90%);
      z-index: 0;
    }

    & > * {
      position: relative;
      z-index: 1;
    }
  }

  .skills {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      position: relative;
      font-size: $l;
      color: var(--color-brand);
      padding-bottom: 16px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 160px;
        height: 2px;
        background: var(--color-brand);

        [lang^='ru'] & {
          width: 268px;
        }
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--color-brand);
        box-shadow: 148px 0 0 var(--color-brand);

        [lang^='ru'] & {
          box-shadow: 256px 0 0 var(--color-brand);
        }
      }
    }

    &__subtitle {
      margin: 32px 0 64px;
      text-align: center;
    }
  }

  .blocks-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    @media (min-width: $tablet-breakpoint) {
      flex-direction: row;
    }
  }
</style>
