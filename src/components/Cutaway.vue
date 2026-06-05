<script setup lang="ts">

import {type ISocial, socials} from "@/types/constants/socials.ts";
import Icon, { type IconName } from "@/components/UI/icons/Icon.vue";
import { tags } from "@/types/constants/tags.ts";
import { useLocale } from "@/composables/useLocale.ts";

const { t } = useLocale()
const getIcon = (social: ISocial) => social.icon as IconName
</script>

<template>
  <div class="cutaway">
    <div class="profile">
      <div class="profile__img-wrapper">
        <img
          src="@/assets/img/about/pic.jpg"
          alt=""
        >
      </div>
      <span class="profile__name">
        {{ t('name_full') }}
      </span>
      <span class="profile__position">
        {{ t('job_title') }}
      </span>
    </div>
    <div class="socials">
      <div
        v-for="social in socials"
        :key="social.id"
      >
        <Icon
          class="socials__icon"
          :name="getIcon(social)"
        />
        <a
          v-if="social.id === 2"
          target="_blank"
          :href="`mailto:${social.link}`"
          :aria-label="social.aria"
        >
          {{social.title}}
        </a>
        <a
          v-else
          target="_blank"
          :href="social.link"
          :aria-label="social.aria"
        >
          {{social.title}}
        </a>
      </div>
      <div class="socials__item geo">
        <Icon
          class="socials__icon"
          name="IconGeo"
        />
        <span>Russia, Ekaterinburg</span>
      </div>
      <div class="socials__item geo">
        <Icon
          class="socials__icon"
          name="IconCase"
        />
        <span>Full-time</span>
      </div>
    </div>
    <div class="tags">
      <div
        v-for="tag in tags"
        :key="tag"
        class="tags__item"
      >
        {{tag}}
      </div>
    </div>
    <div class="download">
      <a
        href="/files/Alexander-Frontend-Developer-CV.pdf"
        download="Alexander-Frontend-Developer-CV.pdf"
        class="download__button"
      >
        <span>{{ t('download_cv') }}</span> <Icon name="IconDownload" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cutaway {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 4px solid $main-white-color;
    border-radius: 100px 0;
    box-shadow: -4px -4px 3px 0 $brand-color;
    padding: 36px 0;

    @media (min-width: $tablet-breakpoint) {
      max-width: 320px;
      margin: 0 auto;
    }
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__img-wrapper {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      border: 3px solid $brand-color;
      margin: 0 0 16px;
      overflow: hidden;
    }

    &__name {
      font-family: Ubuntu-Medium, sans-serif;
      font-size: $h2-u;
    }

    &__position {
      font-size: $para-u;
      margin: 16px 0 0;
    }
  }

  .socials {
    margin: 32px 0 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__icon {
      width: 16px;
      height: 14px;
      margin: 0 16px 0 0;
    }
  }

  .tags {
    margin: 32px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;

    &__item {
      color: $color-bg;
      background: $brand-color;
      padding: 0 16px;
      font-size: $para-u;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 16px;
    }
  }

  .download {
    margin: 32px 0 0;

    &__button{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      background: $main-white-color;
      border-radius: 32px;
      height: 56px;
      color: $color-bg;
      white-space: nowrap;
      padding: 0 32px;
      transition: all 0.2s;

      &:hover {
        background: $brand-color-second;
      }

      & svg {
        width: 20px;
        height: 20px;
      }
    }
  }
</style>
