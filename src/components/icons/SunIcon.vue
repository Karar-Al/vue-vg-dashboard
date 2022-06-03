<template>
  <Sun :size="size" />
</template>

<script setup>
import { Sun } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
