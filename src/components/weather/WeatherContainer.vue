<script setup>
import { computed } from "vue";
import state from "../../state.js";
import CloudLightningIcon from "../icons/CloudLightningIcon.vue";
import CloudRainIcon from "../icons/CloudRainIcon.vue";
import CloudSunIcon from "../icons/CloudSunIcon.vue";
import SnowflakeIcon from "../icons/SnowflakeIcon.vue";
import SunIcon from "../icons/SunIcon.vue";

const weatherIcons = {
  clear: ["01d", "01n"],
  clouds: ["02d", "02n", "03d", "03n", "04d", "04n"],
  rain: ["09d", "09n", "10d", "10n"],
  thunder: ["11d", "11n"],
  snow: ["13d", "13n"],
};

const props = defineProps({
  size: {
    type: Object,
    default: (() => {
      return {};
    })(),
  },
});

console.log(props.size);

const sizes = {
  small: 0,
  medium: 4,
  big: 6,
};

const computedSize = computed(() => props.size.column + props.size.row);
</script>

<template>
  <div class="flex flex-row flex-wrap items-center justify-between gap-3">
    <div class="flex flex-row items-center gap-3">
      <div
        :title="state.components.weather.weather.description"
        v-if="computedSize >= sizes.medium"
      >
        <SunIcon
          size="48"
          v-if="
            weatherIcons.clear.includes(state.components.weather.weather.icon)
          "
        />
        <CloudSunIcon
          :size="48"
          v-else-if="
            weatherIcons.clouds.includes(state.components.weather.weather.icon)
          "
        />
        <CloudRainIcon
          :size="48"
          v-else-if="
            weatherIcons.rain.includes(state.components.weather.weather.icon)
          "
        />
        <CloudLightningIcon
          :size="48"
          v-else-if="
            weatherIcons.thunder.includes(state.components.weather.weather.icon)
          "
        />
        <SnowflakeIcon
          v-else-if="
            weatherIcons.snow.includes(state.components.weather.weather.icon)
          "
        />
        <p v-else class="text-2xl font-bold ordinal">
          {{ state.components.weather.weather.main }}
        </p>
      </div>
      <p class="text-3xl font-bold xl:text-6xl">
        {{ Math.round(state.components.weather.main.temp) }}°C
      </p>
    </div>

    <div v-if="computedSize >= sizes.big" class="flex flex-col gap-3">
      <p>
        <strong>Humidity:</strong> {{ state.components.weather.main.humidity }}%
      </p>
      <p>
        <strong>Pressure:</strong>
        {{ state.components.weather.main.pressure }} hPa
      </p>
    </div>
  </div>
</template>
