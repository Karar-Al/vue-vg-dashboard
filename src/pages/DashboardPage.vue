<script setup>
import CardContainer from "../components/card/CardContainer.vue";
import state from "../state.js";
</script>

<template>
  <div class="hw-xl:grid h-full w-full grid-cols-12 grid-rows-4 flex-col gap-3">
    <CardContainer
      v-for="(item, index) in state.layout"
      :key="index + item.title"
      :title="item.title"
      :icon="item.icon"
      :component="item.component"
      :size="{ row: item.rowSpan, column: item.columnSpan }"
      :class="`order-[${item.row + item.column}]`"
      :style="{
        gridArea: `${item.row} / ${item.column} / span ${item.rowSpan} / span ${item.columnSpan}`,
      }"
    />
  </div>
</template>
