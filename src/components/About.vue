<script setup lang="ts">

  import { useLocale } from "@/composables/useLocale.ts";
  import { useTemplateRef } from "vue";
  import { type TBlockTitle } from "@/types/constants/homePage.ts";

  const { t } = useLocale()
  const sectionId: TBlockTitle = 'about';
  const rootRef = useTemplateRef<HTMLElement>('rootRef')
  defineExpose({
    rootRef,
  });
</script>

<template>
  <section
    ref="rootRef"
    class="about-wrapper"
    :id="sectionId"
  >
    <div class="about">
      <h1>
        {{t('about_me')}}
      </h1>
      <p>
        <span class="greetings highlight">
          {{t('hello')}}
        </span>
        <span>
          {{ t('my_name_is') }}
          {{ t('name') }}
          {{ t('about_spec') }}
          <span class="highlight">HTML</span>, <span class="highlight">CSS</span>, <span class="highlight">JS</span>, <span class="highlight">TS</span>, <span class="highlight">Vue</span> etc.
        </span>
        <span>
          {{ t('about_pers') }}
        </span>
        <span>
          {{ t('about_hobby') }}
        </span>
        <span>
          {{ t('about_vision') }}
        </span>
      </p>
      <img
        src="@/assets/img/about/about_image.jpg"
        alt=""
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
  .about-wrapper {
    background: url("@/assets/img/about/about_background.png") center top;
    padding: 0 22px;
  }

  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0;

    & h1 {
      width: min-content;
      font-size: $article-u;
      background: $color-bg;
      border: 4px solid $brand-color;
      border-radius: 40px 0;
      white-space: nowrap;
      padding: 16px 40px;

      @media (min-width: $tablet-breakpoint) {
        font-size: $h1-u;
      }
    }

    & p {
      position: relative;
      margin: 32px 0 0;
      background: $color-bg;
      border-radius: 40px;
      padding: 58px 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media (min-width: $tablet-breakpoint) {
        max-width: 620px;
        margin: 64px 0 0;
      }

      @media (min-width: $desktop-breakpoint) {
        max-width: 880px;
      }

      &::before {
        content: '<p>';
        position: absolute;
        color: $brand-color-second;
        font-size: $para-u;
        top: 24px;
        left: 24px;
      }

      &::after {
        content: '</p>';
        position: absolute;
        color: $brand-color-second;
        font-size: $para-u;
        bottom: 24px;
        left: 24px;
      }
    }

    & img {
      border-radius: 40px;
      border: 0;
      overflow: hidden;
      margin: 64px 0 0;
      max-width: 272px;

      @media (min-width: $tablet-breakpoint) {
        max-width: 462px;
      }

      @media (min-width: $desktop-breakpoint) {
        margin: 128px 0 0;
      }
    }

    & .greetings {
      font-size: $article-u;
    }
  }

  .highlight {
    color: $brand-color;
  }
</style>
