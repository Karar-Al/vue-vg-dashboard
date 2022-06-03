<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :class="
      active
        ? '-mb-0.5 dark:bg-neutral-800'
        : 'dark:bg-neutral-800 dark:bg-opacity-50'
    "
    class="border-color-media w-full rounded-md rounded-b-none border-2 border-b-0 bg-white p-1 text-center"
  >
    <slot></slot>
  </button>
</template>
