<template>
  <MessageCircle :size="size" />
</template>

<script setup>
import { MessageCircle } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
