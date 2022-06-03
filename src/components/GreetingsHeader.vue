<script setup>
import { defineComponent } from "vue";
import { showModal } from "../scripts/modal.js";
import state from "../state.js";
import CardContainer from "./card/CardContainer.vue";
import ButtonComponent from "./form/ButtonComponent.vue";
import InputComponent from "./form/InputComponent.vue";
import UserIcon from "./icons/UserIcon.vue";
import ModalContainer from "./modal/ModalContainer.vue";

defineComponent({
  name: "GreetingsHeader",
});

// `defineProps` is a compiler macro and no longer needs to be imported.
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

function loginSubmit(el) {
  const target = el.target;
  const { name: nameEl } = target.elements;

  const name = nameEl.value;

  console.log(name);

  if (name.length === 0) {
    // Error!
    return;
  }

  state.socket.sendLoginRequest(name);

  showModal();
}
</script>

<template>
  <div class="flex flex-row gap-3 xl:p-4">
    <CardContainer
      background-color="w-full bg-gradient-to-br from-emerald-50 dark:from-emerald-900 to-blue-50 dark:to-blue-900"
    >
      <div class="flex flex-row items-center justify-between">
        <h1 class="w-full text-center text-xl font-semibold">{{ msg }}</h1>
      </div>
    </CardContainer>
    <ButtonComponent
      @click="showModal('loginModal')"
      class="flex w-16 items-center justify-center"
    >
      <UserIcon />
    </ButtonComponent>
  </div>

  <template v-if="state.activeModal === 'loginModal'">
    <ModalContainer title="Login">
      <form
        class="flex flex-col gap-3"
        id="loginform"
        @submit.prevent="loginSubmit"
      >
        <p class="flex flex-col gap-2">
          <label class="px-2" for="name">Username</label>
          <InputComponent
            type="text"
            name="name"
            id="name"
            :value="state.user"
          />
        </p>

        <ButtonComponent class="w-full shadow-xl">Change user</ButtonComponent>
      </form>
    </ModalContainer>
  </template>
</template>
