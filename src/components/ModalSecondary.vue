<template>
  <div class="modal primary">
    <div class="modal-content">
      <div>
        <h3 id="text">
          <hr :style="{ marginBottom: '-' + top + 'px' }" />
          <div v-html="text"></div>
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["closeModal", "text", "top"],
};
</script>
