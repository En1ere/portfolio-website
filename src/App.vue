<script setup lang="ts">
import Header from "@/components/general/Header.vue";
import Footer from "@/components/general/Footer.vue";
import Modals from "@/components/UI/modals/Modals.vue";
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Modals />
  <Footer />
</template>

<style lang="scss" scoped>
</style>
