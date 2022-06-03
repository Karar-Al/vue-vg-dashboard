<script setup>
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    v-bind:class="
      isActive
        ? 'dark:bg-neutral-800 bg-stone-100 shadow-inner dark:shadow-black shadow-stone-500'
        : 'dark:bg-neutral-800 dark:bg-opacity-50 bg-white hover:shadow-inner'
    "
    class="flex h-16 w-full items-center justify-center text-2xl hover:bg-stone-100 hover:dark:bg-neutral-800"
  >
    <slot></slot>
  </button>
</template>
