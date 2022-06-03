<template>
  <Book :size="size" />
</template>

<script setup>
import { Book } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
