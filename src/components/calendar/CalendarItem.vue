<script setup>
import { computed } from "vue";
import {
  getFormattedDateTitle,
  getFormattedEntryTime,
} from "../../scripts/timeformatter";
import state from "../../state";
import BellIcon from "../icons/BellIcon.vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  timeObject: Object,
  reminder: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number,
    required: true,
  },
});

const computedTimeString = computed(
  () =>
    `${getFormattedDateTitle(
      props.timeObject.startDate,
      state.locale
    )} | ${getFormattedEntryTime(
      props.timeObject.startDate,
      props.timeObject.endDate,
      state.locale
    )} |`
);
</script>

<template>
  <div
    :class="
      index % 2 ? 'bg-neutral-400 bg-opacity-25 dark:bg-neutral-900' : undefined
    "
    class="flex flex-row items-center justify-between gap-3 p-1"
  >
    <div class="flex flex-row flex-wrap gap-3">
      <p class="w-14" v-if="time">
        {{ time }}
      </p>
      <p v-else>
        {{ computedTimeString }}
      </p>
      <p>{{ name }}</p>
    </div>

    <p v-if="reminder" class="pr-2">
      <BellIcon :size="16" class="stroke-red-600" />
    </p>
  </div>
</template>
