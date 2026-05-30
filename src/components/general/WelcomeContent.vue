<script setup lang="ts">

import Navigation from "@/components/general/Navigation.vue";
</script>

<template>
  <div class="welcome">
    <h1 class="welcome__title">
      <span>Welcome to my Frontend development</span>
      <span>Portfolio</span>
    </h1>
    <Navigation />
  </div>
</template>

<style scoped lang="scss">
  .welcome {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-content: flex-start;
    padding: 88px 20px;

    &__title {
      position: relative;
      font-size: 32px;
      margin: 0 0 50px 0;

      & span {
        display: block;
      }

      & span:last-child {
        margin: 12px 0 0;
        font-size: 56px;
        font-weight: 700;
      }

      &::after {
        position: absolute;
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 50%;
        overflow: hidden;
        background: #F1BD76;
        bottom: 25px;
        right: 56px;
      }
    }
  }
</style>
