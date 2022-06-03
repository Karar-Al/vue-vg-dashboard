<script setup>
import InfoIcon from "../icons/InfoIcon.vue";
import ThermometerIcon from "../icons/ThermometerIcon.vue";
import MessageCircleIcon from "../icons/MessageCircleIcon.vue";
import Globe2Icon from "../icons/Globe2Icon.vue";
import CalendarIcon from "../icons/CalendarIcon.vue";
import BookIcon from "../icons/BookIcon.vue";
import LineChartIcon from "../icons/LineChartIcon.vue";
import AlarmClockIcon from "../icons/AlarmClockIcon.vue";
import SettingsIcon from "../icons/SettingsIcon.vue";
import ShoppingBagIcon from "../icons/ShoppingBagIcon.vue";

const component = {
  InfoIcon,
  ThermometerIcon,
  MessageCircleIcon,
  Globe2Icon,
  CalendarIcon,
  BookIcon,
  LineChartIcon,
  AlarmClockIcon,
  SettingsIcon,
  ShoppingBagIcon,
};

defineProps({
  text: {
    type: String,
  },
  icon: {
    type: String,
    default: "InfoIcon",
  },
});
</script>

<template>
  <div class="flex w-full flex-row justify-between gap-3">
    <span class="text-2xl font-bold">{{ text }}</span>
    <slot>
      <component :is="component[icon]" />
    </slot>
  </div>
</template>
