<script setup>
import DollarSignIcon from "../icons/DollarSignIcon.vue";
import CryptoSignIcon from "../icons/CryptoSignIcon.vue";
import ArrowDownLeftIcon from "../icons/ArrowDownLeftIcon.vue";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon.vue";
import EqualIcon from "../icons/EqualIcon.vue";

defineProps({
  /**
   * @type {{ type: number, symbol: string, oldValue: number, value: number, high: number, low: number }}
   */
  d: {
    type: Object,
    required: true,
  },

  size: {
    type: Object,
    default: (() => {
      return {};
    })(),
  },
});

const sizes = {
  small: 0,
  medium: 3,
  big: 4,
};
</script>

<template>
  <div
    class="flex w-full flex-row items-center justify-between tracking-tighter"
  >
    <div class="flex flex-row items-center justify-start gap-3">
      <DollarSignIcon v-if="d.type === 0" :size="16" />
      <CryptoSignIcon v-if="d.type === 1" :size="16" />

      <p class="text-lg font-extrabold xl:text-sm">{{ d.symbol }}</p>
    </div>

    <div class="flex w-full flex-row items-center justify-end gap-3">
      <template v-if="size.column >= sizes.big">
        <p class="font-semibold xl:text-sm">{{ d.value }}</p>
        <small>High: {{ d.high }}</small>
        <small>Low: {{ d.low }}</small>
      </template>
      <template v-else-if="size.column >= sizes.medium">
        <p class="font-semibold xl:text-sm">{{ d.value }}</p>
        <small>H: {{ d.high }}</small>
      </template>
      <template v-else>
        <p class="xl:text-sm">{{ d.value }}</p>
      </template>

      <ArrowDownLeftIcon v-if="d.oldValue > d.value" :size="24" />
      <ArrowUpRightIcon v-else-if="d.value > d.oldValue" :size="24" />
      <EqualIcon v-else :size="24" />
    </div>
  </div>
</template>
