<script setup>
import state from "../../state.js";
import CardContainer from "../card/CardContainer.vue";

defineProps({
  size: {
    type: Object,
    default: (() => {
      return {};
    })(),
  },
});

const sizes = {
  small: 2,
  medium: 3,
  big: 4,
};
</script>

<template>
  <div
    class="border-color-media flex h-full flex-row gap-3 overflow-y-hidden rounded-md border-2 py-4 px-2"
  >
    <CardContainer
      v-for="(item, index) in state.components.news"
      :key="index"
      class="max-h-50vh min-w-fit"
      :url="item.link"
    >
      <div class="flex flex-col">
        <p
          class="font-semibold"
          :class="size.row >= sizes.small ? 'text-lg' : undefined"
        >
          {{ item.title }}
        </p>
        <small v-if="size.column >= sizes.medium">
          {{ new Date(item.pubDate).toLocaleString("sv-SE") }}
        </small>
      </div>
      <p
        class="max-w-prose overflow-y-auto"
        v-if="size.row >= sizes.small && typeof item.description === 'string'"
      >
        {{ item.description }}
      </p>
    </CardContainer>
  </div>
</template>
