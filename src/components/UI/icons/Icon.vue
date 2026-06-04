<script setup lang="ts">
import { computed } from 'vue';
import IconMail from "@/components/UI/icons/IconMail.vue";
import IconGeo from "@/components/UI/icons/IconGeo.vue";
import IconVk from "@/components/UI/icons/IconVk.vue";
import IconTg from "@/components/UI/icons/IconTg.vue";
import IconGit from "@/components/UI/icons/IconGit.vue";
import IconCase from "@/components/UI/icons/IconCase.vue";
import IconDownload from "@/components/UI/icons/IconDownload.vue";
import IconPC from "@/components/UI/icons/IconPC.vue";
import IconBack from "@/components/UI/icons/IconBack.vue";
import IconArrowLeft from "@/components/UI/icons/IconArrowLeft.vue";
import IconArrowRight from "@/components/UI/icons/IconArrowRight.vue";
import IconSearch from "@/components/UI/icons/IconSearch.vue";
import IconArrowDown from "@/components/UI/icons/IconArrowDown.vue";
import IconArrowUp from "@/components/UI/icons/IconArrowUp.vue";
import type { TClassValue } from "@/types/style.ts";

const icons = {
  IconMail,
  IconGeo,
  IconVk,
  IconTg,
  IconGit,
  IconCase,
  IconDownload,
  IconPC,
  IconBack,
  IconArrowLeft,
  IconArrowRight,
  IconSearch,
  IconArrowDown,
  IconArrowUp,
} as const;
export type IconName = keyof typeof icons

interface SvgIconProps {
  name: IconName;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
  class?: TClassValue;
}

const props = defineProps<SvgIconProps>();

const component = computed(() => icons[props.name]);
</script>

<template>
  <Component
    :is="component"
    v-if="component"
    v-bind="props"
  />
</template>
