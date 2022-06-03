<script setup>
import state from "@/state.js";
import CalendarIcon from "./icons/CalendarIcon.vue";
import LayoutGridIcon from "./icons/LayoutGridIcon.vue";
import ShoppingBagIcon from "./icons/ShoppingBagIcon.vue";
import NavigationBarItem from "./NavigationBarItem.vue";

// import SettingsIcon from "./icons/SettingsIcon.vue";

function onNavigationBarItemClick(page) {
  state.page = page;
}
</script>

<template>
  <div
    class="container mx-auto overflow-clip rounded-t-md shadow-[0_0_10px_rgba(0,0,0,0.2)]"
  >
    <div
      class="flex flex-row justify-center divide-x-4 divide-black dark:divide-neutral-800 dark:bg-neutral-900"
    >
      <NavigationBarItem
        v-bind:is-active="state.page === 'dashboard'"
        v-on:click="onNavigationBarItemClick('dashboard')"
      >
        <LayoutGridIcon />
      </NavigationBarItem>

      <NavigationBarItem
        v-bind:is-active="state.page === 'calendar'"
        v-on:click="onNavigationBarItemClick('calendar')"
      >
        <CalendarIcon />
      </NavigationBarItem>

      <NavigationBarItem
        v-bind:is-active="state.page === 'shopping'"
        v-on:click="onNavigationBarItemClick('shopping')"
      >
        <ShoppingBagIcon />
      </NavigationBarItem>

      <!--
      <NavigationBarItem
        v-bind:is-active="state.page === 'settings'"
        v-on:click="onNavigationBarItemClick('settings')"
      >
        <SettingsIcon />
      </NavigationBarItem>
      -->
    </div>
  </div>
</template>
