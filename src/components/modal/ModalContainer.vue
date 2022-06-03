<script setup>
import state from "../../state.js";

import ButtonComponent from "../form/ButtonComponent.vue";
import XIcon from "../icons/XIcon.vue";

defineProps({
  title: {
    type: String,
  },
});

function hideModal() {
  state.activeModal = "";
}
</script>

<template>
  <div
    @click.self="hideModal"
    class="fixed top-0 right-0 bottom-0 left-0 z-20 h-full w-full overflow-y-auto bg-black bg-opacity-50"
  >
    <div class="container relative my-10 mx-auto p-4 md:h-auto">
      <div
        class="border-color-media relative rounded-md border-2 bg-white dark:bg-neutral-800"
      >
        <div
          class="border-color-media flex w-full items-center justify-between border-b-2 p-4"
        >
          <h3 class="text-xl font-semibold">{{ title }}</h3>
          <ButtonComponent @click="hideModal"
            ><XIcon :size="24"
          /></ButtonComponent>
        </div>
        <main class="p-4">
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>
