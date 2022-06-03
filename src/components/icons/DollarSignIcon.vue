<template>
  <DollarSign :size="size" />
</template>

<script setup>
import { DollarSign } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
