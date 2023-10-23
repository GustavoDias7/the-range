<template>
  <div class="modal primary">
    <div class="modal-content">
      <div>
        <h2>{{ word }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["closeModal", "word"],
};
</script>
