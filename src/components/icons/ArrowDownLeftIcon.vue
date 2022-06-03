<script setup>
import { ArrowDownLeft } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>

<template>
  <ArrowDownLeft :size="size" />
</template>
