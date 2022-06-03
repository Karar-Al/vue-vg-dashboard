<template>
  <Equal :size="size" />
</template>

<script setup>
import { Equal } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
