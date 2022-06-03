<template>
  <Settings :size="size" />
</template>

<script setup>
import { Settings } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
