<template>
  <ArrowUpRight :size="size" />
</template>

<script setup>
import { ArrowUpRight } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
