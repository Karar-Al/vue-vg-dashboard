<script setup>
import WeatherContainer from "../weather/WeatherContainer.vue";
import StocksContainer from "../stocks/StocksContainer.vue";
import CalendarCardBodyContainer from "../calendar/CalendarCardBodyContainer.vue";
import NewsContainer from "../news/NewsContainer.vue";
import BooksContainer from "../books/BooksContainer.vue";
import ChatContainer from "../chat/ChatContainer.vue";

const component = {
  WeatherContainer,
  StocksContainer,
  CalendarCardBodyContainer,
  NewsContainer,
  BooksContainer,
  ChatContainer,
};

defineProps({
  componentName: {
    type: String,
    required: true,
  },
  size: {
    type: Object,
    default: (() => {
      return {};
    })(),
  },
});
</script>

<template>
  <component :is="component[componentName]" :size="size" />
</template>
