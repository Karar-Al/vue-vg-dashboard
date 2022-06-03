<script setup>
defineProps({
  backgroundColor: {
    type: String,
    default:
      "bg-black bg-opacity-10 hover:bg-opacity-20 dark:bg-neutral-600 dark:bg-opacity-50 hover:dark:bg-opacity-100",
  },
});
</script>
<template>
  <button :class="backgroundColor" class="rounded-md p-2">
    <slot></slot>
  </button>
</template>
