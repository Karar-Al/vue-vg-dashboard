<script setup>
import { computed } from "vue";
import {
  getFormattedDateTitle,
  getFormattedEntryTime,
} from "../../scripts/timeformatter.js";
import state from "../../state.js";
import CalendarItem from "./CalendarItem.vue";

defineProps({
  size: {
    type: Object,
    default: (() => {
      return {};
    })(),
  },
  maxHeight: {
    type: Boolean,
    default: true,
  },
});

const computedCalendarArray = computed(() => {
  const arr = [];

  for (let index = 0; index < state.components.calendar.length; index++) {
    const item = state.components.calendar[index];
    const day = getFormattedDateTitle(item.startDate, state.locale);

    const indexInArr = arr.findIndex((i) => i.date === day);

    const obj = {
      id: item.id,
      reminder: item.reminder,
      time: getFormattedEntryTime(item.startDate, item.endDate, state.locale),
      name: item.name,
    };

    if (indexInArr > -1) {
      arr[indexInArr].items.push(obj);
      continue;
    }

    arr.push({
      date: day,
      items: [obj],
    });
  }

  return arr;
});
</script>

<template>
  <div
    :class="maxHeight ? 'max-h-50vh' : undefined"
    class="flex flex-col gap-3"
  >
    <div
      v-for="(item, index) in computedCalendarArray"
      :key="index"
      class="flex w-full flex-col gap-1"
    >
      <h3 class="text-xl font-semibold">
        {{ item.date }}
      </h3>
      <hr class="mr-1 h-1 rounded-md border-0 bg-neutral-900" />
      <CalendarItem
        v-for="(item, ii) in item.items"
        :key="item.id"
        :name="item.name"
        :time="item.time"
        :reminder="item.reminder"
        :index="ii"
      ></CalendarItem>
    </div>
  </div>
</template>
