<template>
  <Send :size="size" />
</template>

<script setup>
import { Send } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
