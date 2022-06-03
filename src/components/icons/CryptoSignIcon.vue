<template>
  <Bitcoin :size="size" />
</template>

<script setup>
import { Bitcoin } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
