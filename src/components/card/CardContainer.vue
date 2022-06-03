<script setup>
import { defineComponent } from "vue";

import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";

defineComponent({
  name: "CardContainer",
});

const props = defineProps({
  title: String,
  icon: String,
  component: String,

  backgroundColor: {
    type: String,
    default: "dark:bg-neutral-800 dark:bg-opacity-50 bg-white",
  },
  url: String,

  size: {
    type: Object,
    default: (() => {
      return {};
    })(),
  },
});

function openURL(url) {
  if (url) window.open(url, "_blank");
}

const classes = `${props.backgroundColor}${
  props.url
    ? " cursor-pointer hover:bg-blue-100 hover:bg-opacity-20 active:bg-blue-200 active:bg-opacity-20"
    : ""
}`;
</script>

<template>
  <div
    @click="openURL(url)"
    :class="classes"
    class="overflow-hidden rounded-md p-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
  >
    <div class="flex h-full flex-col gap-3">
      <CardHeader v-if="title" :text="title" :icon="icon" />
      <template v-if="component">
        <div class="flex h-full flex-col gap-3 overflow-auto">
          <CardBody :component-name="component" :size="size" />
        </div>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </div>
</template>
