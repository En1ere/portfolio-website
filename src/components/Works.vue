<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { works } from "@/types/constants/works.ts";
import Icon from "@/components/UI/icons/Icon.vue";
import { useLocale } from "@/composables/useLocale.ts";
import { useTemplateRef } from "vue";
import { type TBlockTitle } from "@/types/constants/homePage.ts";

const { t } = useLocale()
const sectionId: TBlockTitle = 'works';
const swiperModules = [Navigation, Autoplay]

const swiperOptions = {
  modules: swiperModules,
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 500,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
  pagination: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
}
const rootRef = useTemplateRef<HTMLElement>('rootRef')
defineExpose({
  rootRef,
});
</script>

<template>
  <section
    ref="rootRef"
    class="works-wrapper"
    :id="sectionId"
  >
    <div class="works">
      <h1 class="works__title">
        {{t('works_title')}}
      </h1>
      <span class="works__subtitle">
        {{ t('works_subtitle') }}
      </span>
      <div class="slider">
        <Swiper
          class="slider__main"
          v-bind="swiperOptions"
        >
          <SwiperSlide
            class="slider__item"
            v-for="work in works"
            :key="work.id"
          >
            <a
              class="slider__link"
              :href="work.link"
              target="_blank"
            >
              {{t('view_site')}}
            </a>
            <img
              :src="work.image"
              alt=""
            >
          </SwiperSlide>
        </Swiper>
        <div class="slider__controls">
          <button
            class="slider__button slider__button--prev"
            type="button"
          >
            <Icon name="IconArrowLeft" hover-color="var(--color-brand-second)" />
          </button>

          <div class="slider__pagination" />

          <button
            class="slider__button slider__button--next"
            type="button"
          >
            <Icon name="IconArrowRight" hover-color="var(--color-brand-second)" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .works-wrapper {
    background: var(--color-darker-bg);
    padding: 64px;
  }

  .works {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      --line-width: 205px;

      position: relative;
      display: inline-block;
      font-size: $l;
      color: var(--color-brand);
      padding-bottom: 16px;

      [lang^="ru"] & {
        --line-width: 254px;
      }

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: var(--line-width);
        height: 2px;
        background: var(--color-brand);
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -7px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--color-brand);
        box-shadow: calc(var(--line-width) - 12px) 0 0 var(--color-brand);
      }
    }

    &__subtitle {
      margin: 32px 0 64px;
      text-align: center;
    }
  }

  .slider {
    position: relative;
    max-height: 198px;
    max-width: 298px;

    @media (min-width: $tablet-breakpoint) {
      max-height: 320px;
      max-width: 480px;
    }

    @media (min-width: $desktop-breakpoint) {
      max-height: 432px;
      max-width: 480px;
    }

    &__link {
      position: absolute;
      top: 8px;
      right: 24px;
      color: var(--color-brand);
      border-bottom: 2px solid white;
      padding: 0 0 4px;
      transition: all 0.2s;

      &:hover {
        color: var(--color-brand-second);
      }

      @media (min-width: $tablet-breakpoint) {
        top: 24px;
        right: 92px;
      }

      @media (min-width: $desktop-breakpoint) {
        top: 40px;
        right: 116px;
      }

      &::after {
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-left: 8px;
        background-image: url("@/assets/img/icons/icon-mouse-pointer.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        top: 20px;
        right: -25px;
      }
    }

    &__controls {
      position: absolute;
      width: 100%;
      bottom: -50px;
      display: flex;
      justify-content: space-between;

      @media (min-width: $tablet-breakpoint) {
        bottom: unset;
        top: 50%;
        transform: translate(-100px, -50%);
        width: calc(100% + 200px);
      }
    }

    &__button {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 0;
      background: var(--color-bg);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;

      @media (min-width: $tablet-breakpoint) {
        width: 72px;
        height: 72px;
      }
    }
  }
</style>
