<script setup>
import subjects from "./mock/subjects";
</script>

<template>
  <div class="box">
    <div class="box-container">
      <form class="form" @submit.prevent="">
        <div class="row">
          <h1 class="main-title">THE RANGE</h1>
        </div>
        <div class="row">
          <h2 class="random-subject" v-text="randomSubject"></h2>
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
          <div class="row">
            <input
              id="seconds"
              v-model="seconds"
              type="text"
              class="input filled"
              :class="{ active: seconds.length > 0 }"
            />
            <label for="seconds" class="label">
              <span>Seconds</span>
            </label>
          </div>
        </div>
        <div class="row">
          <h3>Tips</h3>
          <br />
          <div>
            <button
              class="accordion primary"
              :class="{ active: accordion }"
              @click="toggleAccordion"
            >
              <div class="text">
                <h3>Perguntas abertas</h3>
                <span class="arrow"></span>
              </div>
              <div class="content">
                <div>
                  <p>O que? Por que? Qual? Como? Onde? Quando?</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
    <div :class="{ test: toggleReflow }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjects,
      seconds: "10",
      randomSubject: "",
      intervalRef: 0,
      showBar: false,
      toggleReflow: false,
      accordion: false,
    };
  },
  methods: {
    startRandom() {
      this.stopRandom();
      this.choiceSubject();
      if (Number(this.seconds) > 0) {
        this.intervalRef = setInterval(() => {
          this.choiceSubject();
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
    choiceSubject() {
      const lenSubject = this.subjects.length;
      const r1 = Math.floor(Math.random() * lenSubject);
      const keyName = Object.keys(this.subjects[r1])[0];
      const r2 = Math.floor(Math.random() * this.subjects[r1][keyName].length);
      this.randomSubject = `${keyName}: ${this.subjects[r1][keyName][r2]}`;
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
    toggleAccordion() {
      this.accordion = !this.accordion;
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
