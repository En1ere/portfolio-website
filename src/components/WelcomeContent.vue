<script setup lang="ts">

import Cutaway from "@/components/Cutaway.vue";
import Icon, { type IconName } from "@/components/UI/icons/Icon.vue";
import { type ISocial, socials } from "@/types/constants/socials.ts";
import ExperienceStats from "@/components/ExperienceStats.vue";
import { useLocale } from "@/composables/useLocale.ts";
import { useTemplateRef } from "vue";
import { type TBlockTitle } from "@/types/constants/homePage.ts";

const { locale, t } = useLocale()

const sectionId: TBlockTitle = 'welcome';
const rootRef = useTemplateRef<HTMLElement>('rootRef')
defineExpose({
  rootRef,
});
const getIconName = (social: ISocial) => social.icon as IconName
</script>

<template>
  <section
    ref="rootRef"
    class="welcome"
    :id="sectionId"
  >
    <h1 class="welcome__title">
      {{ t('main_title') }}
    </h1>
    <div class="content-wrapper">
      <Cutaway />
      <div class="wrapper">
        <div class="text-content">
          <h1 class="text-content__title">
            {{ locale === 'en' ? "Hey " : null }}{{ t('name_is') }}<span class="text-content__title_name letter-left">{{t('name')}}</span>,<br/>{{t('job_title')}}
          </h1>
          <p class="text-content__text">
            {{ t('main_subtitle') }}
          </p>
          <div class="text-content__invite">
            <a
              target="_blank"
              :href="socials.telegram.link"
            >
              <span>{{ t('lets_talk') }}</span>
              <div class="text-content__invite-icon">
                <Icon
                  :name="getIconName(socials.telegram)"
                  hover-color="var(--color-brand-second)"
                />
              </div>
            </a>
          </div>
        </div>
        <ExperienceStats />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .welcome {
    margin: 32px 0 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 0 30px 64px;


    &__title {
      display: none;

      @media (min-width: $desktop-breakpoint) {
        display: block;
        color: var(--color-brand-second);
        font-size: $xl;
        margin: 0 0 64px;
      }
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: $desktop-breakpoint) {
      flex-direction: row;
      max-width: 1024px;
    }

    @media (min-width: $wide-breakpoint) {
      flex-direction: row;
      margin: 0 0 0 128px;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;

    @media (min-width: $wide-breakpoint) {
      flex-direction: row;
    }
  }

  .text-content {
    padding: 0 16px;
    margin: 82px 0 64px;

    &__title {
      position: relative;
      font-size: $m;
      margin: 22px 0 84px;

      @media (min-width: $tablet-breakpoint) {
        font-size: $l;
      }

      &_name {
        color: var(--color-brand);
      }

      &::before {
        content: '<h1>';
        position: absolute;
        color: var(--color-brand-second);
        font-size: $xs;
        top: -22px;
        left: -16px;
      }

      &::after {
        content: '</h1>';
        position: absolute;
        color: var(--color-brand-second);
        font-size: $xs;
        bottom: -22px;
        left: -16px;
      }
    }

    &__text {
      position: relative;
      margin: 30px 0;

      &::before {
        content: '<p>';
        position: absolute;
        color: var(--color-brand-second);
        font-size: $xs;
        top: -30px;
        left: -16px;
      }

      &::after {
        content: '</p>';
        position: absolute;
        color: var(--color-brand-second);
        font-size: $xs;
        bottom: -30px;
        left: -16px;
      }
    }

    &__invite {
      color: var(--color-brand);
      font-size: 42px;
      margin: 50px 0 0;
      display: flex;
      align-items: center;
      transition: all 0.2s;

      &:hover {
        color: var(--color-brand-second);
      }

      & span {
        margin: 0 16px 0 0;
      }

      & a {
        display: flex;
        align-items: center;
      }
    }

    &__invite-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: transparent;
      padding: 4px;
    }
  }
</style>
