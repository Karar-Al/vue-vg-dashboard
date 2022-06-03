<template>
  <Calendar :size="size" />
</template>

<script setup>
import { Calendar } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
