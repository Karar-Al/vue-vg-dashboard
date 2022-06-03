<script setup>
import FlexColumn from "../FlexColumn.vue";
import CardContainer from "../card/CardContainer.vue";
import CardHeader from "../card/CardHeader.vue";
import LayoutBuilder from "./LayoutBuilder.vue";

import ThermometerIcon from "../icons/ThermometerIcon.vue";
import MessageCircleIcon from "../icons/MessageCircleIcon.vue";
import Globe2Icon from "../icons/Globe2Icon.vue";
import CalendarIcon from "../icons/CalendarIcon.vue";
import BookIcon from "../icons/BookIcon.vue";
import LineChartIcon from "../icons/LineChartIcon.vue";

import WeatherContainer from "../weather/WeatherContainer.vue";
import StocksContainer from "../stocks/StocksContainer.vue";
import CalendarCardBodyContainer from "../calendar/CalendarCardBodyContainer.vue";
import NewsContainer from "../news/NewsContainer.vue";
import BooksContainer from "../books/BooksContainer.vue";
import ChatContainer from "../chat/ChatContainer.vue";

const component = {
  LayoutBuilder,

  ThermometerIcon,
  MessageCircleIcon,
  Globe2Icon,
  CalendarIcon,
  BookIcon,
  LineChartIcon,

  WeatherContainer,
  StocksContainer,
  CalendarCardBodyContainer,
  NewsContainer,
  BooksContainer,
  ChatContainer,
};

defineProps({
  layout: {
    type: Object,
    required: true,
  },
  parent: {
    type: String,
  },
});
</script>

<template>
  <template v-if="layout.type === 'Rows'">
    <div
      class="flex flex-col gap-3 xl:h-1/2 xl:flex-row"
      v-for="(item, index) in layout.content"
      :key="index"
    >
      <component
        :is="component['LayoutBuilder']"
        :layout="item"
        :parent="layout.type"
      />
    </div>
  </template>

  <template v-else-if="layout.type === 'Columns'">
    <div
      class="flex h-full flex-col gap-3"
      v-for="(item, index) in layout.content"
      :key="index"
    >
      <component
        :is="component['LayoutBuilder']"
        :layout="item"
        :parent="layout.type"
      />
    </div>
  </template>

  <template v-else-if="layout.type === 'Column'">
    <FlexColumn
      :class="{
        'xl:w-1/6': layout.size === 0,
        'xl:w-2/6': layout.size === 1,
        'xl:w-3/6': layout.size === 2,
      }"
    >
      <template v-for="(item, index) in layout.content" :key="index">
        <component
          :is="component['LayoutBuilder']"
          :layout="item"
          :parent="layout.type"
        />
      </template>
    </FlexColumn>
  </template>

  <template v-else-if="layout.type === 'Card'">
    <CardContainer>
      <CardHeader :text="layout.title">
        <component :is="component[layout.icon]" />
      </CardHeader>

      <component :is="component[layout.component]" />
    </CardContainer>
  </template>

  <template v-else-if="layout.content">
    <template v-for="(item, index) in layout.content" :key="index">
      <component
        :is="component['LayoutBuilder']"
        :layout="item"
        :parent="layout.parent"
      />
    </template>
  </template>
</template>
