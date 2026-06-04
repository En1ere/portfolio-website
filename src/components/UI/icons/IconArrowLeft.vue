<script setup lang="ts">
const { color } = defineProps({
  color: {
    type: String,
    default: "#FFFFFF",
  },
})
</script>

<template>
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.3571 20.0002L26.1786 11.1787C26.8294 10.5278 26.8294 9.47252 26.1786 8.82165C25.5277 8.17078 24.4724 8.17078 23.8215 8.82165L13.8215 18.8217C13.1707 19.4725 13.1707 20.5278 13.8215 21.1787L23.8215 31.1787C24.4724 31.8295 25.5277 31.8295 26.1786 31.1787C26.8294 30.5278 26.8294 29.4725 26.1786 28.8216L17.3571 20.0002Z"
      :fill="color"
    />
  </svg>
</template>

