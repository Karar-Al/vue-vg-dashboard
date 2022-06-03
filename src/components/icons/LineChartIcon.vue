<template>
  <LineChart :size="size" />
</template>

<script setup>
import { LineChart } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
