<template>
  <X :size="size" />
</template>

<script setup>
import { X } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
