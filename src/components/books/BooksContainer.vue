<script setup>
import { works } from "./example_openlibrary_query.json";

import CardContainer from "../card/CardContainer.vue";
import { computed } from "vue";

// Title
// Author
// Picture

const data = works.slice(0, 10).map((item) => ({
  title: item.title,
  // .map((author) => author.name).join(", ")
  author: item.authors[0].name,
  imageURL: `https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg`,
  link: `https://openlibrary.org${item.key}`,
}));

const props = defineProps({
  size: {
    type: Object,
    default: (() => {
      return {};
    })(),
  },
});

const sizes = {
  small: 0,
  medium: 2,
  big: 3,
};

const computedCoverHeight = computed(() =>
  props.size.row >= sizes.medium ? "h-72" : "h-72 xl:h-24"
);
</script>

<template>
  <div
    class="border-color-media flex h-full flex-row items-center gap-3 overflow-y-hidden rounded-md border-2 py-4 px-2"
  >
    <CardContainer
      v-for="(item, index) in data"
      :key="index"
      class="relative w-64 shrink-0 p-0"
      :class="computedCoverHeight"
      :url="item.link"
    >
      <img
        class="w-full object-cover"
        :src="item.imageURL"
        :class="computedCoverHeight"
      />
      <div
        class="absolute bottom-0 w-full bg-black bg-opacity-75 text-white dark:text-neutral-300"
        :class="size.row >= sizes.medium ? 'p-4' : 'p-2'"
      >
        <p v-if="size.row >= sizes.medium">{{ item.title }}</p>
        <small v-else>{{ item.title }}</small>
        <small v-if="size.row >= sizes.medium">{{ item.author }}</small>
      </div>
    </CardContainer>
  </div>
</template>
