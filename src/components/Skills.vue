<script setup lang="ts">

</script>

<template>
  <div class="skills-wrapper">
    <section class="skills">
      <h1 class="skills__title">
        {{ $t('skills') }}
        <div class="line">
          <div class="dot" />
          <div class="dot" />
        </div>
      </h1>
      <span class="skills__subtitle">
        {{ $t('skills_subtitle') }}
      </span>
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
      background: rgba(41, 47, 54, 0.9);
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
      font-size: $H1-U;
      color: $brand-color;

      & .line {
        position: absolute;
        background: $brand-color;
        height: 2px;
        width: 160px;
        bottom: -16px;
        left: 0;
      }
      & .dot {
        position: absolute;
        background: $brand-color;
        border-radius: 50%;
        border: 0;
        height: 12px;
        width: 12px;
        bottom: -5px;
        left: 0;

        &:last-child {
          right: 0;
          left: unset;
        }
      }
    }
    &__subtitle {
      margin: 32px 0 64px;
    }
  }
</style>
