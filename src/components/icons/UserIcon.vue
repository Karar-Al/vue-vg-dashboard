<template>
  <User :size="size" />
</template>

<script setup>
import { User } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
