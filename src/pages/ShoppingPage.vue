<script setup>
import { defineComponent } from "vue";
import CardContainer from "../components/card/CardContainer.vue";
import ButtonComponent from "../components/form/ButtonComponent.vue";
import InputComponent from "../components/form/InputComponent.vue";
import ModalContainer from "../components/modal/ModalContainer.vue";
import ShoppingItem from "../components/shopping/ShoppingItem.vue";
import { showModal } from "../scripts/modal.js";
import state from "../state.js";

defineComponent({
  data() {
    return {
      state,
    };
  },
});

function newShoppingEntry(el) {
  const target = el.target;
  const { shoppingItemName: nameEl, shoppingItemAmount: amountEl } =
    target.elements;

  const name = nameEl.value;
  const amount = Number(amountEl.value);

  console.log(name, amount);

  if (name.length === 0 || isNaN(amount)) {
    // Error!
    return;
  }

  // Send!
  state.socket.sendShoppingListRequest("Shopping/NewEntry", {
    id: Date.now(),
    name,
    amount,
  });
  showModal();
}

function deleteShoppingEntry(id) {
  state.socket.sendShoppingListRequest("Shopping/RemoveEntry", {
    id,
  });
}

let selectedUser = "Karar";
</script>

<template>
  <div class="flex h-full w-full flex-col gap-3">
    <div>
      <CardContainer title="Options">
        <ButtonComponent @click="showModal('newShoppingEntry')"
          >Add new item</ButtonComponent
        >
      </CardContainer>
    </div>
    <CardContainer
      title="Your shopping list"
      icon="ShoppingBagIcon"
      class="h-full"
    >
      <div class="flex flex-col gap-3 overflow-y-auto xl:pr-2">
        <ShoppingItem
          v-for="(item, index) in state.components.shoppingList"
          :key="item.id"
          :name="item.name"
          :amount="item.amount"
          :id="item.id"
          :user="selectedUser"
          :index="index"
          @delete-shopping-entry="deleteShoppingEntry"
        />
      </div>
    </CardContainer>
  </div>
  <template v-if="state.activeModal === 'newShoppingEntry'">
    <ModalContainer title="New Shopping item">
      <form
        class="flex flex-col flex-wrap gap-3 xl:flex-row"
        id="newshoppingentry"
        @submit.prevent="newShoppingEntry"
      >
        <p class="flex flex-col gap-2 xl:w-5/6">
          <label class="px-2" for="shoppingItemName">Name</label>
          <InputComponent
            type="text"
            name="shoppingItemName"
            id="shoppingItemName"
          />
        </p>

        <p class="flex flex-col gap-2 xl:-mx-2 xl:w-1/6">
          <label class="px-2" for="shoppingItemAmount">Amount</label>
          <InputComponent
            type="number"
            value="1"
            name="shoppingItemAmount"
            id="shoppingItemAmount"
          />
        </p>

        <ButtonComponent class="w-full shadow-xl">Save</ButtonComponent>
      </form>
    </ModalContainer>
  </template>
</template>
