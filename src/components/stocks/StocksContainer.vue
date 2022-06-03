<script setup>
import state from "../../state.js";
import StocksItem from "./StocksItem.vue";

defineProps({
  size: {
    type: Object,
    default: (() => {
      return {};
    })(),
  },
});
</script>

<template>
  <div
    class="max-h-50vh flex flex-col justify-between gap-3 overflow-hidden overflow-y-auto xl:pb-2"
  >
    <StocksItem
      v-for="item in state.components.stocks.items"
      :key="item.symbol"
      :d="item"
      :size="size"
    />
    <small>Data from Alpha Vantage - {{ state.components.stocks.date }}</small>
  </div>
</template>
