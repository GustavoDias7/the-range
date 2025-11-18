<template>
  <div class="modal pm" :class="{ active: active }">
    <div class="modal-content">
      <button class="close" @click="closeModal" v-text="'x'"></button>
      <div class="form">
        <div class="row full"></div>
        <textarea class="input filled" @change="setCustomList"></textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["active", "closeModal", "setCustomList"],
};
</script>
