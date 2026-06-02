<script setup lang="ts">

import Cutaway from "@/components/Cutaway.vue";
import Icon from "@/components/UI/icons/Icon.vue";
import {socials} from "@/types/constants/socials.ts";
import ExperienceStats from "@/components/ExperienceStats.vue";
import {useLocale} from "@/composables/useLocale.ts";

const {locale} = useLocale()
</script>

<template>
  <section class="welcome">
    <h1 class="welcome__title">
      {{ $t('main_title') }}
    </h1>
    <div class="content-wrapper">
      <Cutaway />
      <div class="wrapper">
        <div class="text-content">
          <h1 class="text-content__title">
            {{ locale === 'en' ? `${$t('hey')} ` : null }}{{ $t('name_is') }}<span class="text-content__title_name letter-left">{{$t('name')}}</span>,<br/>{{$t('job_title')}}
          </h1>
          <p class="text-content__text">
            {{ $t('main_subtitle') }}
          </p>
          <div class="text-content__invite">
            <a target="_blank" :href="socials.telegram.link" >
              <span>{{ $t('lets_talk') }}</span>
              <div class="text-content__invite-icon"><Icon :name="socials.telegram.icon" /></div>
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
      @media (min-width: $desktopBreakpoint) {
        display: block;
        color: $brand-color-second;
        font-size: $biggestText;
        margin: 0 0 64px;
      }
    }
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: $desktopBreakpoint) {
      flex-direction: row;
      max-width: 1024px;
    }

    @media (min-width: $wideBreakpoint) {
      flex-direction: row;
      margin: 0 0 0 128px;
    }
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;

    @media (min-width: $wideBreakpoint) {
      flex-direction: row;
    }
  }
  .text-content {
    padding: 0 16px;
    margin: 82px 0 64px 0;

    &__title {
      position: relative;
      font-size: $H2-U;
      margin: 22px 0 84px 0;
      @media (min-width: $tabletBreakpoint) {
        font-size: $H1-U;
      }

      &_name {
        color: $brand-color;
      }

      &::before {
        content: '<h1>';
        position: absolute;
        color: $brand-color-second;
        font-size: $Para-U;
        top: -22px;
        left: -16px;
      }
      &::after {
        content: '</h1>';
        position: absolute;
        color: $brand-color-second;
        font-size: $Para-U;
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
        color: $brand-color-second;
        font-size: $Para-U;
        top: -30px;
        left: -16px;
      }
      &::after {
        content: '</p>';
        position: absolute;
        color: $brand-color-second;
        font-size: $Para-U;
        bottom: -30px;
        left: -16px;
      }
    }
    &__invite {
      color: $brand-color;
      font-size: 42px;
      margin: 50px 0 0;
      display: flex;
      align-items: center;

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
      background: #43454D;
      border-radius: 50%;
      border: 0;
      padding: 4px;
    }
  }
</style>
