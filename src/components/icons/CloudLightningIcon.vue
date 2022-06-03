<script setup>
import { CloudLightning } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>

<template>
  <CloudLightning :size="size" />
</template>
