<script setup>
import ModalTertiary from "../components/ModalTertiary.vue";
</script>
<template>
  <div class="global-background" id="question-training">
    <div class="box">
      <div class="box-container">
        <form class="form" @submit.prevent="">
          <div class="row full">
            <h1 class="main-title">Question Training</h1>
          </div>
          <div class="row full flex">
            <div class="row full">
              <input
                type="text"
                class="input filled"
                :class="active('start')"
                v-model.number="start"
              />
              <label for="start" class="label">Start</label>
            </div>
            <div class="row full">
              <input
                type="text"
                class="input filled"
                :class="active('speek')"
                v-model.number="speek"
              />
              <label for="speek" class="label">Speek</label>
            </div>
            <div class="row full">
              <input
                type="text"
                class="input filled"
                :class="active('question')"
                v-model.number="question"
              />
              <label for="question" class="label">Question</label>
            </div>
            <div class="row full">
              <input
                type="text"
                class="input filled"
                :class="active('rounds')"
                v-model.number="rounds"
              />
              <label for="rounds" class="label">Rounds</label>
            </div>
          </div>
          <div class="row full">
            <button
              class="gn-button pm-button full"
              :disabled="
                !isValidFields(['start', 'speek', 'question', 'rounds'])
              "
              @click="openModal"
            >
              Start
            </button>
          </div>
        </form>
      </div>
    </div>
    <ModalTertiary
      :class="{ active: modal }"
      :title="turn"
      :current_round="counter_rounds"
      :quantity_rounds="rounds"
      :second_counter="second_counter"
      @click="closeModal"
    />
  </div>
</template>

<style lang="scss">
@import "../assets/styles/pages/question-training.scss";
</style>

<script>
export default {
  data() {
    return {
      start: 6,
      speek: 12,
      question: 6,
      rounds: 3,
      modal: false,
      interval_id: 0,
      counter_rounds: 1,
      second_counter: 0,
      turn: "start", // start | (speek | question)
    };
  },
  methods: {
    closeModal() {
      clearInterval(this.interval_id);
      this.modal = !this.modal;
      this.counter_rounds = 1;
      this.second_counter = 0;
      this.turn = "start";
    },

    openModal() {
      this.modal = !this.modal;

      this.interval_id = setInterval(() => {
        if (this.second_counter < this[this.turn]) {
          this.second_counter++;
        } else {
          this.second_counter = 0;
          if (this.turn === "start") {
            this.turn = "speek";
          } else if (this.turn === "speek") {
            if (this.counter_rounds === this.rounds) this.closeModal();
            else this.turn = "question";
          } else if (this.turn === "question") {
            this.turn = "speek";
            this.counter_rounds++;
          }
        }
      }, 1000);
    },

    active(prop) {
      return {
        active: this[prop] !== "",
      };
    },

    isValidFields(fields = []) {
      return fields.every(
        (field) => this[field] != "" && !isNaN(this[field]) && this[field] > 0
      );
    },
  },
  watch: {},
  computed: {},
};
</script>
