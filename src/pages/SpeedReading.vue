<script setup>
import ModalPrimary from "../components/ModalPrimary.vue";
</script>
<template>
  <div id="speed-reading">
    <div class="box">
      <div class="box-container">
        <form class="form" @submit.prevent="">
          <div class="row full">
            <h1 class="main-title">Speed Reading</h1>
          </div>
          <div class="row full">
            <textarea
              id="text"
              name="text"
              class="input full"
              v-model.trim="text"
            ></textarea>
          </div>
          <div class="interface">
            <div class="row">
              <button
                class="gn-button pm-button"
                @click="openModal"
                :disabled="!text.length"
              >
                Start
              </button>
            </div>
            <div class="row wpm">
              <div class="row">
                <button class="gn-button pm-button" @click="lessSecond(5)">
                  -5
                </button>
              </div>
              <div class="row">
                <input
                  type="text"
                  class="input filled"
                  :class="{ active: wpm.length > 0 }"
                  v-model="wpm"
                />
                <label for="wpm" class="label">WPM</label>
              </div>
              <div class="row">
                <button class="gn-button pm-button" @click="plusSecond(5)">
                  +5
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <ModalPrimary
      :class="{ active: modal }"
      :word="currWord"
      @click="closeModal"
    />
  </div>
</template>

<style lang="scss">
@import "../assets/styles/pages/speed-reading.scss";
</style>

<script>
export default {
  data() {
    return {
      wpm: "100",
      modal: false,
      text: "",
      wordList: [],
      counter: 0,
      currWord: "",
      intervalID: 0,
    };
  },
  methods: {
    openModal() {
      if (this.text.length === 0) return;
      this.wordList = this.text.replace(/(\n*)\n/g, " ").split(" ");
      this.modal = true;
      this.intervalID = setInterval(() => {
        if (this.counter < this.wordList.length) {
          this.currWord = this.wordList[this.counter];
          this.counter += 1;
        } else {
          this.closeModal();
        }
      }, (60 / Number(this.wpm)) * 1000);
    },
    closeModal() {
      clearInterval(this.intervalID);
      this.currWord = "";
      this.counter = 0;
      this.modal = false;
    },
    lessSecond(sec) {
      const newSec = Number(this.wpm) - sec;
      if (newSec < 0) return;
      this.wpm = String(newSec);
    },
    plusSecond(sec) {
      const newSec = Number(this.wpm) + sec;
      this.wpm = String(newSec);
    },
  },
  watch: {},
  computed: {},
};
</script>
