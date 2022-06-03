<template>
  <Globe2 :size="size" />
</template>

<script setup>
import { Globe2 } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
