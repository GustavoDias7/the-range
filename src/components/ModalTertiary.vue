<template>
  <div class="modal primary">
    <div class="modal-content">
      <div>
        <h2>{{ title }} {{ current_round }}/{{ quantity_rounds }}</h2>
        <h2>{{ second_counter }}s</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "current_round", "quantity_rounds", "second_counter"],
};
</script>
