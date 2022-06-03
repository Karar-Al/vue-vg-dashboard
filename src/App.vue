<script setup>
import GreetingsHeader from "./components/GreetingsHeader.vue";
import NavigationBar from "./components/NavigationBar.vue";
import CalendarPage from "./pages/CalendarPage.vue";
import DashboardPage from "./pages/DashboardPage.vue";
import ShoppingPage from "./pages/ShoppingPage.vue";
import { init } from "./scripts/websockets.js";
import state from "./state.js";

const headers = {
  dashboard: "Welcome to your dashboard, your house is not on fire. 🙂",
  calendar: "Calendar & Reminders",
  shopping: "Shopping lists",
};

if (window.WebSocket) {
  state.socket = init();
}
</script>

<template>
  <div
    :class="state.activeModal ? 'h-screen overflow-hidden' : 'hw-xl:h-screen'"
    class="container relative mx-auto flex flex-col justify-between p-4 pb-16 tracking-wider subpixel-antialiased"
  >
    <GreetingsHeader :msg="headers[state.page] ?? state.page.toUpperCase()" />

    <main class="hw-xl:overflow-hidden h-full py-4 xl:px-4">
      <DashboardPage v-if="state.page === 'dashboard'" />
      <CalendarPage v-if="state.page === 'calendar'" />
      <ShoppingPage v-if="state.page === 'shopping'" />
    </main>

    <div class="container fixed bottom-0 left-0 right-0 mx-auto px-4 xl:px-8">
      <NavigationBar />
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "Roboto Flex";
  font-display: auto;
  src: local("RobotoFlex"), local("Roboto Flex"),
    url("@/assets/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf")
      format("truetype");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: normal;
}

html {
  font-family: "Roboto Flex", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
}

.hw-xl\:grid {
  display: flex;
}

@media (min-height: 979px) and (min-width: 1280px) {
  .hw-xl\:overflow-hidden {
    overflow: hidden;
  }
  .hw-xl\:h-screen {
    height: 100vh;
  }
  .hw-xl\:grid {
    display: grid;
  }
}

/* width */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.max-h-50vh {
  max-height: 50vh;
}

.border-color-media {
  border-color: #e5e7eb;
}

@media (prefers-color-scheme: dark) {
  /* Track */
  ::-webkit-scrollbar-track {
    background: rgb(90, 90, 90);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(125, 125, 125);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(150, 150, 150);
  }

  .border-color-media {
    border-color: #444444;
  }
}
</style>
