<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {works} from "@/types/constants/works.ts";
import Icon from "@/components/UI/icons/Icon.vue";

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
</script>

<template>
  <div class="works-wrapper">
    <section class="works">
      <h1 class="works__title">
        {{$t('works_title')}}
      </h1>
      <span class="works__subtitle">
        {{ $t('works_subtitle') }}
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
              {{$t('view_site')}}
            </a>
            <img :src="work.image" alt="">
          </SwiperSlide>
        </Swiper>
        <div class="slider__controls">
          <button
            class="slider__button slider__button--prev"
            type="button"
          >
            <Icon name="IconArrowLeft" />
          </button>

          <div class="slider__pagination" />

          <button
            class="slider__button slider__button--next"
            type="button"
          >
            <Icon name="IconArrowRight" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .works-wrapper {
    background: #1A1E23;
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
      font-size: $H1-U;
      color: $brand-color;
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
        background: $brand-color;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -7px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: $brand-color;
        box-shadow: calc(var(--line-width) - 12px) 0 0 $brand-color;
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

    @media (min-width: $tabletBreakpoint) {
      max-height: 320px;
      max-width: 480px;
    }
    @media (min-width: $desktopBreakpoint) {
      max-height: 432px;
      max-width: 480px;
    }

    &__link {
      position: absolute;
      top: 40px;
      right: 116px;
      color: $brand-color;
      border-bottom: 2px solid white;
      padding: 0 0 4px 0;
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

      @media (min-width: $tabletBreakpoint) {
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
      background: $color-bg;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;

      @media (min-width: $tabletBreakpoint) {
        width: 72px;
        height: 72px;
      }
    }
  }
</style>
