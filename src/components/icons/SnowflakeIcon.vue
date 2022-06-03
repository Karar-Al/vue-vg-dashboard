<template>
  <Snowflake :size="size" />
</template>

<script setup>
import { Snowflake } from "lucide-vue-next";

defineProps({
  size: {
    type: Number,
    default: 32,
  },
});
</script>
