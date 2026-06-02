<script setup lang="ts">

</script>

<template>
  <div class="about-wrapper">
    <section class="about">
      <h1>
        {{$t('about_me')}}
      </h1>
      <p>
        <span class="greetings highlight">
          {{$t('hello')}}
        </span>
        <span>
          {{ $t('my_name_is') }}
          {{ $t('name') }}
          {{ $t('about_spec') }}
          <span class="highlight">HTML</span>, <span class="highlight">CSS</span>, <span class="highlight">JS</span>, <span class="highlight">TS</span>, <span class="highlight">Vue</span> etc.
        </span>
        <span>
          {{ $t('about_pers') }}
        </span>
        <span>
          {{ $t('about_hobby') }}
        </span>
        <span>
          {{ $t('about_vision') }}
        </span>
      </p>
      <img src="@/assets/img/about/about_image.jpg" alt="">
    </section>
  </div>
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
      font-size: $Article-U;
      background: $color-bg;
      border: 4px solid $brand-color;
      border-radius: 40px 0 40px 0;
      white-space: nowrap;
      padding: 16px 40px;

      @media (min-width: $tabletBreakpoint) {
        font-size: $H1-U;
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

      @media (min-width: $tabletBreakpoint) {
        max-width: 620px;
        margin: 64px 0 0;
      }
      @media (min-width: $desktopBreakpoint) {
        max-width: 880px;
      }

      &::before {
        content: '<p>';
        position: absolute;
        color: $brand-color-second;
        font-size: $Para-U;
        top: 24px;
        left: 24px;
      }
      &::after {
        content: '</p>';
        position: absolute;
        color: $brand-color-second;
        font-size: $Para-U;
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

      @media (min-width: $tabletBreakpoint) {
        max-width: 462px;
      }
      @media (min-width: $desktopBreakpoint) {
        margin: 128px 0 0;
      }
    }

    & .greetings {
      font-size: $Article-U;
    }
  }
  .highlight {
    color: $brand-color;

    &:first-child {
    }
  }
</style>
