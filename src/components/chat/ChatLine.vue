<script setup>
defineProps({
  date: {
    type: Number,
    default: new Date().getTime(),
  },
  author: String,
  content: String,
  index: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div
    :class="
      index % 2
        ? 'bg-white dark:bg-neutral-900 dark:bg-opacity-70'
        : 'bg-gray-100 dark:bg-neutral-900'
    "
    class="items-center gap-3 p-2"
  >
    <small class="mr-2">{{ new Date(date).toLocaleTimeString("sv-SE") }}</small>
    <strong class="mr-2">{{ author }}:</strong>
    <span class="mr-2 max-w-prose">{{ content }}</span>
  </div>
</template>
