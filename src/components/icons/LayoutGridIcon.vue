<template>
  <LayoutGrid :size="size" />
</template>

<script setup>
import { LayoutGrid } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
