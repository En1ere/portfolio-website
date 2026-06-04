<script setup lang="ts">
  import { useLocale } from "@/composables/useLocale.ts";

  const { t } = useLocale()
</script>

<template>
  <p>
    {{ t('terms_text')}}
  </p>
</template>

