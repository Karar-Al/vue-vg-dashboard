<script setup>
import ButtonComponent from "../form/ButtonComponent.vue";
import XIcon from "../icons/XIcon.vue";
defineEmits(["deleteShoppingEntry"]);

defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  index: Number,
  amount: Number,
});
</script>

<template>
  <div
    :class="
      index % 2 ? 'bg-neutral-400 bg-opacity-25 dark:bg-neutral-900' : undefined
    "
    class="flex flex-row items-center justify-between gap-3 p-1"
  >
    <p>x{{ amount }} {{ name }}</p>
    <ButtonComponent class="shadow" @click="$emit('deleteShoppingEntry', id)">
      <XIcon :size="16" />
    </ButtonComponent>
  </div>
</template>
