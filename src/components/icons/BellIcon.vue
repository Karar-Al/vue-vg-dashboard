<template>
  <Bell :size="size" />
</template>

<script setup>
import { Bell } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
