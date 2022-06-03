<script setup>
import { computed, defineComponent } from "vue";
import CalendarCardBodyContainer from "../components/calendar/CalendarCardBodyContainer.vue";
import CalendarItem from "../components/calendar/CalendarItem.vue";
import CardContainer from "../components/card/CardContainer.vue";
import ButtonComponent from "../components/form/ButtonComponent.vue";
import InputComponent from "../components/form/InputComponent.vue";
import SelectComponent from "../components/form/SelectComponent.vue";
import ModalContainer from "../components/modal/ModalContainer.vue";
import { showModal } from "../scripts/modal.js";
import {
  getFormattedDateTitle,
  getFormattedEntryTime,
  sortByStartDate,
} from "../scripts/timeformatter.js";
import state from "../state.js";

defineComponent({
  data() {
    return {
      state,
    };
  },
});

function newCalendarEntrySubmit(el) {
  const target = el.target;
  const {
    calendarEntryName: nameEl,
    startDate: startDateEl,
    endDate: endDateEl,
  } = target.elements;

  const name = nameEl.value;
  const startDate = new Date(startDateEl.value);
  const endDate = new Date(endDateEl.value);

  console.log(name, startDate, endDate);

  if (
    name.length === 0 ||
    isNaN(startDate.getTime()) ||
    isNaN(endDate.getTime())
  ) {
    // Error!
  } else {
    // Save!
    const id = Date.now();

    state.socket.sendCalendarRequest("Calendar/NewEntry", {
      id,
      startDate: startDate.getTime(),
      endDate: endDate.getTime(),
      name,
    });

    showModal();
  }
}

function newReminderEntrySubmit(el) {
  const target = el.target;
  const { calendarID: calendarIDEl } = target.elements;

  const id = Number(calendarIDEl.value);

  if (isNaN(id)) {
    // Error!
    return;
  }

  const { startDate, endDate, name, reminder } = state.components.calendar.find(
    (entry) => entry.id === id
  );

  // Send!
  state.socket.sendCalendarRequest("Calendar/UpdateEntry", {
    id,
    startDate,
    endDate,
    name,
    reminder: !reminder,
  });

  showModal();
}

const reminders = computed(() =>
  state.components.calendar.filter((entry) => entry.reminder === true)
);

const sortedByStartDate = computed(() =>
  sortByStartDate(state.components.calendar)
);
</script>

<template>
  <div class="flex h-full w-full flex-col gap-3">
    <div class="flex grid-cols-6 flex-col gap-3 xl:grid">
      <CardContainer
        class="col-span-1 text-center"
        title="Reminders"
        icon="AlarmClockIcon"
      >
        <h3
          class="cursor-pointer text-6xl font-bold"
          @click="showModal('showReminders')"
        >
          {{ reminders.length }}
        </h3>
      </CardContainer>
      <CardContainer class="col-span-5" title="Options">
        <ButtonComponent @click="showModal('newCalendarEntry')"
          >Add new calendar entry</ButtonComponent
        >
        <ButtonComponent @click="showModal('newReminderEntry')"
          >Toggle reminder</ButtonComponent
        >
      </CardContainer>
    </div>
    <CardContainer title="Calendar" icon="CalendarIcon" class="h-full">
      <CalendarCardBodyContainer
        class="overflow-y-auto"
        :max-height="false"
      ></CalendarCardBodyContainer>
    </CardContainer>
  </div>

  <template v-if="state.activeModal === 'newCalendarEntry'">
    <ModalContainer title="New Calendar Entry">
      <form
        class="flex flex-col gap-3"
        id="newcalendarentry"
        @submit.prevent="newCalendarEntrySubmit"
      >
        <p class="flex flex-col gap-2">
          <label class="px-2" for="calendarEntryName">Name</label>
          <InputComponent
            type="text"
            name="calendarEntryName"
            id="calendarEntryName"
          />
        </p>

        <p class="flex flex-col gap-2">
          <label class="px-2" for="startDate">Start date</label>
          <InputComponent
            type="datetime-local"
            name="startDate"
            id="startDate"
          />
        </p>

        <p class="flex flex-col gap-2">
          <label class="px-2" for="endDate">End date</label>
          <InputComponent type="datetime-local" name="endDate" id="endDate" />
        </p>

        <ButtonComponent class="shadow-xl">Save</ButtonComponent>
      </form>
    </ModalContainer>
  </template>
  <template v-else-if="state.activeModal === 'newReminderEntry'">
    <ModalContainer title="New Calendar Entry">
      <form
        class="flex flex-col gap-3"
        id="newreminderentry"
        @submit.prevent="newReminderEntrySubmit"
      >
        <p class="flex flex-col gap-2">
          <label class="px-2" for="calendarID"
            >Choose which calendar entry to make a reminder</label
          >
          <SelectComponent
            name="calendarID"
            id="calendarID"
            class="border-color-theme w-full rounded-md border-2 bg-transparent p-2 outline-none"
          >
            <option
              v-for="item in sortedByStartDate"
              :key="item.id"
              class="dark:bg-black"
              :value="item.id"
            >
              {{ getFormattedDateTitle(item.startDate, state.locale) }}
              |
              {{
                getFormattedEntryTime(
                  item.startDate,
                  item.endDate,
                  state.locale
                )
              }}
              |
              {{ item.name }}
            </option>
          </SelectComponent>
        </p>
        <ButtonComponent class="shadow-xl">Save</ButtonComponent>
      </form>
    </ModalContainer>
  </template>
  <termplate v-if="state.activeModal === 'showReminders'">
    <ModalContainer title="Your Reminders">
      <div
        class="divide-y-2 divide-neutral-500 divide-opacity-50 border-2 border-neutral-500 border-opacity-50"
      >
        <CalendarItem
          v-for="(item, index) in reminders"
          :key="item.id"
          :name="item.name"
          :time-object="{ startDate: item.startDate, endDate: item.endDate }"
          :reminder="item.reminder"
          :index="index"
        ></CalendarItem>
      </div>
    </ModalContainer>
  </termplate>
</template>
