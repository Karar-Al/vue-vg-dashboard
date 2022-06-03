<template>
  <Info :size="size" />
</template>

<script setup>
import { Info } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
