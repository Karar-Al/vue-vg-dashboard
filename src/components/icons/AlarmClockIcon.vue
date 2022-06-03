<script setup>
import { AlarmClock } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>

<template>
  <AlarmClock :size="size" />
</template>
