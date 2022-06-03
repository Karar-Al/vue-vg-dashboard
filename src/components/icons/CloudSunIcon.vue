<template>
  <CloudSun :size="size" />
</template>

<script setup>
import { CloudSun } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
