<script setup>
import ModalSecondary from "../components/ModalSecondary.vue";
</script>
<template>
  <div class="global-background" id="speed-reading">
    <div class="box">
      <div class="box-container">
        <form class="form" @submit.prevent="">
          <div class="row full">
            <h1 class="main-title">Guided Reading</h1>
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
    <ModalSecondary
      :class="{ active: modal }"
      :text="filteredWord"
      :top="top"
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
      wpm: "120",
      modal: false,
      text: "",
      filteredWord: [],
      counter: 0,
      intervalID: 0,
      top: 0,
      currOffsetLeft: 0,
    };
  },
  methods: {
    openModal() {
      if (this.text.length === 0) return;
      this.text = this.text.trim();
      const splitedText = this.splitText(this.text);
      this.filteredWord = this.addTag(splitedText);
      this.modal = true;
      this.intervalID = setInterval(() => {
        if (this.counter < splitedText.length) {
          const spanPrev =
            document.querySelectorAll(`#text span`)[this.counter - 1];
          const spanCurr =
            document.querySelectorAll(`#text span`)[this.counter];

          if (this.counter === 0) this.prevOffsetLeft = spanCurr.offsetLeft;
          if (spanCurr.offsetLeft < this.prevOffsetLeft) this.top += 24;
          this.prevOffsetLeft = spanCurr.offsetLeft;

          if (this.counter !== 0) spanPrev.classList.remove("active");
          spanCurr.classList.add("active");
          this.counter += 1;
        } else {
          this.closeModal();
        }
      }, (60 / Number(this.wpm)) * 1000);
    },
    closeModal() {
      clearInterval(this.intervalID);
      const spanActive = document.querySelector(`#text span.active`);
      spanActive?.classList.remove("active");
      this.counter = 0;
      this.top = 0;
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
    splitText(text) {
      return text.replace(/(\n*)\n/g, " ").split(" ");
    },
    addTag(list = [], tag = "span") {
      return list.map((item) => `<${tag}>${item}</${tag}>`).join(" ");
    },
  },
  watch: {},
  computed: {},
};
</script>
