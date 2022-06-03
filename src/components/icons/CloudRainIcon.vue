<script setup>
import { CloudRain } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>

<template>
  <CloudRain :size="size" />
</template>
