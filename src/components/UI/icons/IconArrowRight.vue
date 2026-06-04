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
      d="M16.1784 8.82165C15.5276 8.17078 14.4723 8.17078 13.8214 8.82165C13.1705 9.47252 13.1705 10.5278 13.8214 11.1787L22.6429 20.0002L13.8214 28.8216C13.1705 29.4725 13.1705 30.5278 13.8214 31.1787C14.4723 31.8295 15.5276 31.8295 16.1784 31.1787L26.1784 21.1787C26.8293 20.5278 26.8293 19.4725 26.1784 18.8217L16.1784 8.82165Z"
      :fill="color"
    />
  </svg>
</template>

