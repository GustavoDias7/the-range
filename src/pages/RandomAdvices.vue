<script setup>
import arcana from "../mock/arcana";
import bellSound from "../assets/sound/copper-bell-ding-4-204990.mp3";
</script>
<template>
  <div class="global-background" id="random-words">
    <div class="box">
      <div class="box-container">
        <form class="form" @submit.prevent="">
          <div class="row">
            <div class="scoreboard">
              <div class="remaining">
                <h3>Remaining</h3>
                <p v-text="remaining"></p>
              </div>
            </div>
          </div>
          <div class="row">
            <h2 class="random-words">{{ major.name }}</h2>
            <h3 class="random-words">{{ major.meaning }}</h3>
          </div>
          <div class="row">
            <h2 class="random-words">{{ minor.name }}</h2>
            <h3 class="random-words">{{ minor.meaning }}</h3>
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
          <div class="row">
            <input
              id="seconds"
              v-model.number="seconds"
              type="text"
              class="input filled"
              :class="active(seconds)"
            />
            <label for="seconds" class="label">Seconds</label>
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
      listMajor: [...arcana.majorArcana],
      listMinor: [...arcana.minorArcana],
      seconds: 0,
      major: {
        name: "???",
        meaning: "???",
      },
      minor: {
        name: "???",
        meaning: "???",
      },
      intervalRef: 0,
      showBar: false,
      toggleReflow: false,
      remaining: 10,
    };
  },
  methods: {
    startRandom() {
      this.choiceWord();

      this.intervalRef = setInterval(() => {
        this.next();
      }, Number(this.seconds) * 1000);
    },
    stopRandom() {
      clearInterval(this.intervalRef);
      this.remaining = 10;
      this.major = {
        name: "???",
        meaning: "???",
      };
      this.minor = {
        name: "???",
        meaning: "???",
      };
    },
    next() {
      this.remaining--;
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
      const majorIndex = Math.floor(Math.random() * this.listMajor.length);
      const minorIndex = Math.floor(Math.random() * this.listMinor.length);
      const majorCard = this.listMajor[majorIndex];
      const minorCard = this.listMinor[minorIndex];
      this.major = majorCard;
      this.minor = minorCard;
      this.listMajor.splice(majorIndex, 1);
      this.listMinor.splice(minorIndex, 1);
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
      return window.localStorage.getItem(name) || "60";
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
      } else {
        this.playSound();
      }
    },
    seconds() {
      this.showBar = false;
      this.stopRandom();
      this.saveLocal("seconds_advices", this.seconds);
    },
    listMajor: {
      handler(newValue, oldValue) {
        if (this.listMajor.length === 0) {
          this.listMajor = this.shuffleArray([...arcana.majorArcana]);
        }
      },
      deep: true,
    },
    listMinor: {
      handler(newValue, oldValue) {
        if (this.listMinor.length === 0) {
          this.listMinor = this.shuffleArray([...arcana.minorArcana]);
        }
      },
      deep: true,
    },
  },
  computed: {
    buttonText() {
      return this.showBar ? "Stop" : "Start";
    },
  },
  created() {
    window.addEventListener("keypress", (e) => {
      if (e.key == "Enter") {
        this.handleClick();
      }
    });
    this.seconds = Number(this.getLocal("seconds_advices"));
  },
};
</script>
