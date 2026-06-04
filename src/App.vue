<script setup lang="ts">
import Header from "@/components/general/Header.vue";
import Footer from "@/components/general/Footer.vue";
import Modals from "@/components/UI/modals/Modals.vue";
import ScrollUp from "@/components/general/ScrollUp.vue";
import { onBeforeUnmount, onMounted, ref, shallowRef, useTemplateRef } from "vue";
import { throttle } from "@/service/helpers.ts";
import { useIntersectionObserver } from '@vueuse/core'

const target = useTemplateRef('footer')
const targetIsVisible = shallowRef(false)

const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    targetIsVisible.value = entry?.isIntersecting || false
  },
)
const scrolled = ref(false)

const handleScroll = throttle(() => scrolled.value = window.scrollY > 300, 300);
onMounted(() => {
  handleScroll()
  window.addEventListener("scroll", handleScroll)
})
onBeforeUnmount(() => {
  stop()
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <div class="main-wrapper">
    <Header />
    <main>
      <RouterView />
    </main>
    <Modals />
    <Transition name="arrow-fade">
      <ScrollUp
        v-if="scrolled"
        :class="['scroll-up', { 'bottom': targetIsVisible }]"
      />
    </Transition>
    <Footer ref="footer" />
  </div>
</template>

<style lang="scss" scoped>
  .main-wrapper {
    position: relative;
  }

  .scroll-up {
    position: fixed;
    bottom: 100px;
    right: 20px;
    z-index: 1;

    @media (min-width: $tablet-breakpoint) {
      right: 50px;
    }

    @media (min-width: $desktop-breakpoint) {
      right: 150px;
    }

    &.bottom {
      position: absolute;
      bottom: calc(50px + 50px);

      @media (min-width: $tablet-breakpoint) {
        bottom: calc(105px + 100px);
      }

      @media (min-width: $desktop-breakpoint) {
        right: 150px;
      }
    }
  }

  .arrow-fade-enter-active,
  .arrow-fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .arrow-fade-enter-active .scroll-up,
  .arrow-fade-leave-active .scroll-up {
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .arrow-fade-enter-from,
  .arrow-fade-leave-to {
    opacity: 0;
  }

  .arrow-fade-enter-from .scroll-up,
  .arrow-fade-leave-to .scroll-up {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
</style>
