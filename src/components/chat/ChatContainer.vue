<script setup>
import { computed } from "vue";
import state from "../../state.js";
import CardContainer from "../card/CardContainer.vue";
import ButtonComponent from "../form/ButtonComponent.vue";
import SendIcon from "../icons/SendIcon.vue";
import ChatLine from "./ChatLine.vue";
import TabButton from "./TabButton.vue";

defineProps({
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
  big: 6,
};

const rooms = computed(() => state.components.chat.map((room) => room.name));
const chat = computed(
  () =>
    state.components.chat.find((chat) => chat.name === state.activeChat) ??
    state.components.chat[0]
);

function changeActiveChat(name) {
  state.activeChat = name;
}

function onMessageSubmit(el) {
  // TODO: Validate, send off to backend.
  const target = el.target;
  const { content: contentEl } = target.elements;

  const content = contentEl.value;

  if (content.length === 0) {
    // Error!
    return;
  }

  state.socket.sendChatMessage({
    room: state.activeChat,
    content,
  });

  contentEl.value = "";
}
</script>

<template>
  <div class="h-full w-full overflow-hidden p-4">
    <div class="flex h-full flex-col">
      <div
        :class="
          size.column >= sizes.big
            ? 'border-color-media hidden sm:flex sm:flex-row'
            : 'hidden'
        "
        class="w-full justify-between gap-3 border-b-2"
      >
        <TabButton
          v-for="name in rooms"
          :active="state.activeChat === name"
          :key="name"
          @click="changeActiveChat(name)"
          >{{ name }}</TabButton
        >
      </div>
      <div
        :class="size.column >= sizes.big ? 'sm:hidden' : undefined"
        class="border-color-media flex rounded-md rounded-b-none border-2"
      >
        <div class="w-full rounded-md rounded-b-none">
          <select
            name="Chat"
            class="w-full bg-transparent p-2 outline-none"
            @change="(ev) => changeActiveChat(ev.target.value)"
          >
            <option
              v-for="name in rooms"
              :selected="state.activeChat === name"
              :key="name"
              class="dark:bg-black"
            >
              {{ name }}
            </option>
          </select>
        </div>
      </div>
      <CardContainer
        class="max-xl-max-h-50vh border-color-media h-full overflow-y-auto rounded-t-none rounded-b-none border-2 border-y-0 p-0"
      >
        <div class="flex flex-col">
          <ChatLine
            v-for="(message, index) in chat.messages"
            :key="index"
            :index="index"
            :author="message.author"
            :content="message.content"
          />
        </div>
      </CardContainer>
      <form
        v-if="chat.name === state.activeChat && state.user !== 'default'"
        class="flex flex-row"
        @submit.prevent="onMessageSubmit"
      >
        <input
          type="text"
          name="content"
          class="border-color-media w-full overflow-hidden rounded-md rounded-t-none rounded-r-none border-2 border-r-0 bg-white p-2 outline-none dark:bg-neutral-800 dark:bg-opacity-50"
          :placeholder="`Chat in #${chat.name} as user ${state.user}...`"
        />
        <ButtonComponent
          background-color="bg-white hover:bg-green-100 hover:bg-opacity-20 active:bg-green-200 active:bg-opacity-20 dark:bg-neutral-800 dark:bg-opacity-50"
          class="border-color-media rounded-t-none rounded-l-none border-2"
        >
          <SendIcon :size="16" />
        </ButtonComponent>
      </form>
      <div
        v-else
        class="border-color-media w-full rounded-md rounded-t-none border-2 bg-white p-2 dark:bg-neutral-800 dark:bg-opacity-50"
      >
        <p>
          {{
            state.user === "default"
              ? "You must login to send a message."
              : "Choose a room to see messages."
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1279px) {
  .max-xl-max-h-50vh {
    max-height: 50vh;
  }
}
</style>
