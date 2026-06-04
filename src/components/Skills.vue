<script setup lang="ts">
import UIBlock from "@/components/UI/blocks/UIBlock.vue";
import { skills } from "@/types/constants/skills.ts";
import { useLocale } from "@/composables/useLocale.ts";

const { t } = useLocale();
</script>

<template>
  <div class="skills-wrapper">
    <section class="skills">
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
    </section>
  </div>
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
      font-size: $h1-u;
      color: $brand-color;
      padding-bottom: 16px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 160px;
        height: 2px;
        background: $brand-color;

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
        background: $brand-color;
        box-shadow: 148px 0 0 $brand-color;

        [lang^='ru'] & {
          box-shadow: 256px 0 0 $brand-color;
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
