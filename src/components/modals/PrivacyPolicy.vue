<script setup lang="ts">

import { useLocale } from "@/composables/useLocale.ts";

const { t } = useLocale()
</script>

<template>
  <p>
    {{ t('privacy_text')}}
  </p>
</template>

