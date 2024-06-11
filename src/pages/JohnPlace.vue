<script setup>
import ModalPrimary from "../components/ModalPrimary.vue";
</script>
<template>
  <div class="global-background" id="speed-reading">
    <div class="box">
      <div class="box-container">
        <form class="form" @submit.prevent="">
          <div class="row full">
            <textarea
              id="text"
              name="text"
              class="input full"
              v-model.trim="text"
            ></textarea>
          </div>
          <div class="row full interface">
            <div class="row">
              <button
                class="gn-button pm-button"
                @click="start"
                :disabled="!splittedText.length"
              >
                Start
              </button>
            </div>
            <div class="row wpm">
              <div class="row">
                <button class="gn-button pm-button" @click="lessSentence">
                  -
                </button>
              </div>
              <div class="row">
                <input
                  type="text"
                  class="input filled"
                  :class="active(sentencesToShow)"
                  v-model="sentencesToShow"
                />
                <label for="sentences" class="label">Sentences</label>
              </div>
              <div class="row">
                <button class="gn-button pm-button" @click="plusSentence">
                  +
                </button>
              </div>
            </div>
          </div>
          <div class="row full">
            <h2>Total of Sentences: {{ splittedText.length }}</h2>
          </div>
        </form>
      </div>
    </div>
    <ModalPrimary
      :class="{ active: modal }"
      :text="sentencesToShowModal()"
      :closeModal="closeModal"
      :next="nextSentence"
      :first="firstSentence"
      :last="lastSentence"
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
      sentencesToShow: 1,
      modal: false,
      text: "",
      splittedText: [],
      currentSentence: null, // index of splittedText
    };
  },
  created() {
    this.text = this.getLocal("text");
    this.sentencesToShow = Number(this.getLocal("sentencesToShow") || 1);

    this.splittedText = this.splitSentences(this.text);
    if (this.splittedText.length > 0) this.currentSentence = 0;

    window.addEventListener("keypress", (e) => {
      if (e.key == "n" || e.key == "N") {
        this.nextSentence();
      }
    });
    window.addEventListener("keypress", (e) => {
      if (e.key == "m" || e.key == "M") {
        this.firstSentence();
      }
    });
    window.addEventListener("keypress", (e) => {
      if (e.key == "l" || e.key == "L") {
        this.lastSentence();
      }
    });
  },
  methods: {
    start() {
      this.splittedText = this.splitSentences(this.text);
      this.openModal();
    },
    openModal() {
      if (this.splittedText.length > 0) this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    lessSentence() {
      if (this.sentencesToShow > 1) this.sentencesToShow--;
    },
    plusSentence() {
      if (this.sentencesToShow < this.splittedText.length)
        this.sentencesToShow++;
    },
    active(value = 0) {
      return { active: value !== "" };
    },
    splitSentences(text) {
      if (text.length === 0) return [];
      var sentences = text.match(/[^\.!\?]+[\.!\?]+|[^\.!\?]+$/g);
      if (!sentences) return [text];
      return sentences.map((sentence) => sentence.trim());
    },
    nextSentence() {
      if (this.currentSentence < this.sentencesToShow - 1)
        this.currentSentence++;
      else this.currentSentence = 0;
    },
    firstSentence() {
      this.currentSentence = 0;
    },
    lastSentence() {
      this.currentSentence = this.sentencesToShow - 1;
    },
    sentencesToShowModal() {
      return this.splittedText.slice(0, this.sentencesToShow)[
        this.currentSentence
      ];
    },
    saveLocal(name, data) {
      window.localStorage.setItem(name, data);
    },
    getLocal(name) {
      return window.localStorage.getItem(name) || "";
    },
  },
  watch: {
    sentencesToShow() {
      this.saveLocal("sentencesToShow", this.sentencesToShow);
      const len = this.splittedText.length;
      if (this.sentencesToShow > len) this.sentencesToShow = len;
      if (len > 0 && this.sentencesToShow < 1) this.sentencesToShow = 1;
    },
    text() {
      this.saveLocal("text", this.text);

      this.splittedText = this.splitSentences(this.text);
      if (this.splittedText.length > 0) {
        this.currentSentence = 0;

        if (this.sentencesToShow > this.splittedText.length)
          this.sentencesToShow = this.splittedText.length;
      }
    },
  },
  computed: {},
};
</script>
