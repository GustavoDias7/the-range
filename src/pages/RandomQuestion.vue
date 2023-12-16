<script setup>
import questions from "../mock/template-questions";
</script>
<template>
  <div class="global-background" id="random-words">
    <div class="box">
      <div class="box-container">
        <form class="form" @submit.prevent="">
          <div class="row">
            <h1 class="main-title">Random Question</h1>
          </div>
          <div class="row">
            <h2 class="random-words" v-text="randomWord"></h2>
          </div>
          <div class="row">
            <div class="bar-time-background"></div>
            <div
              class="bar-time"
              v-if="showBar"
              :style="{
                animation: `widthLeftRight ${seconds}s linear`,
              }"
            ></div>
          </div>
          <div class="row">
            <button class="gn-button pm-button full" @click="handleClick">
              {{ buttonText }}
            </button>
          </div>
          <div class="row">
            <div class="input-container">
              <input
                id="seconds"
                v-model="seconds"
                type="text"
                class="input filled"
                :class="{ active: seconds.length > 0 }"
              />
              <label for="seconds" class="label">Seconds</label>
              <div class="right-element">
                <button class="gn-button sc-button full" @click="resetTime">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div :class="{ test: toggleReflow }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: questions,
      seconds: "5",
      randomWord: "",
      intervalRef: 0,
      showBar: false,
      toggleReflow: false,
    };
  },
  methods: {
    startRandom() {
      this.stopRandom();
      this.choiceWord();
      if (Number(this.seconds) > 0) {
        this.intervalRef = setInterval(() => {
          this.choiceWord();
          this.toggle();
          this.reflow();
        }, Number(this.seconds) * 1000);
      }
    },
    stopRandom() {
      clearInterval(this.intervalRef);
    },
    handleClick() {
      if (Number(this.seconds) === 0) {
        this.startRandom();
      } else if (!this.showBar) {
        this.showBar = !this.showBar;
        this.startRandom();
      } else {
        this.showBar = !this.showBar;
        this.stopRandom();
      }
    },
    choiceWord() {
      const letterIndex = Math.floor(Math.random() * this.list.length);
      const word = this.list[letterIndex];
      this.randomWord = word;
    },
    reflow() {
      const bar = document.querySelector(".bar-time");
      bar.style.animation = "none";
      void bar.offsetWidth; /* trigger reflow */
      bar.style.animation = null;
    },
    toggle() {
      this.toggleReflow = !this.toggleReflow;
    },
    resetTime() {
      this.seconds = "0";
    },
  },
  watch: {
    seconds() {
      this.showBar = false;
      this.stopRandom();
    },
  },
  computed: {
    buttonText() {
      if (Number(this.seconds) > 0) {
        return this.showBar ? "Stop" : "Start";
      } else {
        return "Next";
      }
    },
  },
};
</script>
