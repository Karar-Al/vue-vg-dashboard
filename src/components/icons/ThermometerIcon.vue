<template>
  <Thermometer :size="size" />
</template>

<script setup>
import { Thermometer } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
