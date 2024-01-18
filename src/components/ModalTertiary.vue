<template>
  <div class="modal primary">
    <div class="modal-content">
      <div>
        <button class="close" @click="closeModal"></button>
        <h2>{{ title }}</h2>
        <h2>{{ second_counter }}s</h2>
        <h2 class="random-word" v-if="suggestion" @click="choiceWord">
          {{ random_word }}
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "title",
    "current_round",
    "quantity_rounds",
    "second_counter",
    "random_word",
    "suggestion",
    "closeModal",
    "choiceWord",
  ],
};
</script>
