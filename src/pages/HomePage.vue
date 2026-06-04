<script setup lang="ts">
import WelcomeContent from "@/components/WelcomeContent.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Works from "@/components/Works.vue";
import ScrollNavigation from "@/components/general/ScrollNavigation.vue";
import { useTemplateRef } from "vue";

const refsMap = {
  welcomeRef: useTemplateRef<InstanceType<typeof WelcomeContent>>('welcomeRef'),
  aboutRef: useTemplateRef<InstanceType<typeof About>>('aboutRef'),
  skillsRef: useTemplateRef<InstanceType<typeof Skills>>('skillsRef'),
  worksRef: useTemplateRef<InstanceType<typeof Works>>('worksRef'),
};

export type SectionRefsMap = typeof refsMap;

</script>

<template>
  <WelcomeContent ref="welcomeRef" />
  <About ref="aboutRef" />
  <Skills ref="skillsRef" />
  <Works ref="worksRef" />
  <ScrollNavigation :refs-map="refsMap" />
</template>

