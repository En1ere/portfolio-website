<script setup lang="ts">
import Icon, { type IconName } from "@/components/UI/icons/Icon.vue";
import { blockKeys, blocks, type IBlock, type TBlockTitle } from "@/types/constants/homePage.ts";
import type { SectionRefsMap } from "@/pages/HomePage.vue";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const SCROLL_OFFSET = 200;
let observer: IntersectionObserver | null = null;

const props = defineProps<{
  refsMap: SectionRefsMap
}>()

const blocksArray = computed(() => {
  return Object.values(props.refsMap)
    .map((componentRef) => componentRef.value?.rootRef)
    .filter((element): element is HTMLElement => element instanceof HTMLElement)
})

const getIconName = (block: IBlock): IconName => {
  return block.icon as IconName;
}

const activeSection = ref<TBlockTitle>(blockKeys[0]);
const setActive = (key:TBlockTitle) => activeSection.value = key;

const clickHandler = (blockTitle:TBlockTitle) => {
  const element = document.getElementById(blockTitle);

  if (!element) {
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - (blockTitle === "skills" ? SCROLL_OFFSET : 0);

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
}

const isActive = (blockTitle: TBlockTitle) => blockTitle === activeSection.value
const initObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      const activeBlocks = entries.filter(entry => entry.isIntersecting)
      if(activeBlocks.length === 0) {
        return
      }

      const largestViewingBlock = activeBlocks.reduce((prev, current) => {
        return current > prev ? current : prev
      })
      setActive(largestViewingBlock.target.id as TBlockTitle)
    },
    {
      root: null,
      rootMargin: '-49% 0px -49% 0px',
      threshold: 0,
    },
  );

  for (const section of blocksArray.value) {
    observer.observe(section);
  }
}

onMounted(() => {
  initObserver()
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <nav class="scroll-navigation">
    <button
      v-for="(block, blockKey) in blocks"
      :key="block.id"
      :class="['scroll-navigation__button', { 'active': isActive(blockKey) }]"
      @click="clickHandler(blockKey)"
    >
      <Icon
        :color="isActive(blockKey) ? 'var(--color-text-invert)' : 'var(--color-text)'"
        :hover-color="isActive(blockKey) ? '' : 'var(--color-brand-second)'"
        :name="getIconName(block)"
      />
    </button>
  </nav>
</template>

<style scoped lang="scss">
  .scroll-navigation {
    position: fixed;
    width: 64px;
    border-radius: 40px;
    border: 0;
    padding: 8px 12px;
    gap: 24px;
    z-index: 1;
    display: none;
    box-shadow: var(--default-shadow);

    @media (min-width: $tablet-breakpoint) {
      top: 116px;
      left: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (min-width: $desktop-breakpoint) {
      top: 243px;
      left: 64px;
    }

    &__button {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-radius: 50%;
      background: transparent;
      transition: all 0.2s;

      &.active {
        background: var(--color-bg-invert);
      }
    }
  }
</style>
