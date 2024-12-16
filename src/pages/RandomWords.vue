<script setup>
import objects from "../mock/objects.json";
import bellSound from "../assets/sound/copper-bell-ding-4-204990.mp3";
</script>
<template>
  <div class="global-background" id="random-words">
    <div class="box">
      <div class="box-container">
        <form class="form" @submit.prevent="">
          <div class="row">
            <div class="scoreboard">
              <div class="seconds">
                <h3>Seconds</h3>
                <p v-text="seconds"></p>
              </div>
              <div class="remaining">
                <h3>Remaining</h3>
                <p v-text="remaining"></p>
              </div>
            </div>
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
              {{ buttonText }} (Enter)
            </button>
          </div>
          <div class="row flex">
            <button
              class="gn-button pm-button full"
              :class="{ active: seconds === 8 }"
              @click="setEasy"
            >
              Easy
            </button>
            <button
              class="gn-button pm-button full"
              :class="{ active: seconds === 6 }"
              @click="setNormal"
            >
              Normal
            </button>
            <button
              class="gn-button pm-button full"
              :class="{ active: seconds === 4 }"
              @click="setHard"
            >
              Hard
            </button>
          </div>
        </form>
      </div>
      <div :class="{ test: toggleReflow }"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/pages/random-words.scss";
</style>

<script>
export default {
  data() {
    return {
      isRunning: false,
      list: this.mergeArrays(objects),
      seconds: 0,
      randomWord: "???",
      intervalRef: 0,
      showBar: false,
      toggleReflow: false,
      remaining: 30,
    };
  },
  methods: {
    mergeArrays(data) {
      let mergedArray = [];
      for (let letter in data) {
        if (data.hasOwnProperty(letter)) {
          mergedArray = mergedArray.concat(data[letter]);
        }
      }
      return mergedArray;
    },
    setEasy() {
      this.seconds = 8;
    },
    setNormal() {
      this.seconds = 6;
    },
    setHard() {
      this.seconds = 4;
    },
    startRandom() {
      this.isRunning = true;
      this.choiceWord();

      this.intervalRef = setInterval(() => {
        this.next();
      }, Number(this.seconds) * 1000);
    },
    stopRandom() {
      clearInterval(this.intervalRef);
      this.isRunning = false;
      this.remaining = 30;
      this.randomWord = "???";
    },
    next() {
      this.remaining--;
      this.playSound();
      this.choiceWord();
      this.toggle();
      this.reflow();
    },
    handleClick() {
      if (Number(this.seconds) === 0) return;
      if (!this.showBar) {
        this.showBar = !this.showBar;
        this.startRandom();
      } else {
        this.showBar = !this.showBar;
        this.stopRandom();
      }
    },
    choiceWord() {
      if (this.list.length === 0) {
        this.list = this.shuffleArray([...this.mergeArrays(objects)]);
      }
      const letterIndex = Math.floor(Math.random() * this.list.length);
      const word = this.list[letterIndex];
      this.list.splice(letterIndex, 1);
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
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    saveLocal(name, data) {
      window.localStorage.setItem(name, data);
    },
    getLocal(name) {
      return window.localStorage.getItem(name) || "3";
    },
    active(value = 0) {
      return { active: value !== "" };
    },
    playSound() {
      const audio = new Audio(bellSound);
      audio.play();
    },
  },
  watch: {
    remaining() {
      if (this.remaining === 0) {
        this.stopRandom();
        this.showBar = false;
      }
    },
    seconds() {
      this.showBar = false;
      this.stopRandom();
      this.saveLocal("seconds_words", this.seconds);
    },
    isRunning() {
      if (this.isRunning === true) this.score = 0;
    },
  },
  computed: {
    buttonText() {
      return this.showBar ? "Stop" : "Start";
    },
  },
  created() {
    window.addEventListener("keypress", (e) => {
      if (e.key == "k" || e.key == "K") {
        this.setCount();
      }
    });
    window.addEventListener("keypress", (e) => {
      if (e.key == "Enter") {
        this.handleClick();
      }
    });
    this.seconds = Number(this.getLocal("seconds_words"));
  },
};
</script>
