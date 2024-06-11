<template>
  <div class="modal primary">
    <div class="modal-content">
      <button class="close" @click="closeModal"></button>
      <div class="form">
        <div class="row full">
          <h2>{{ text }}</h2>
        </div>

        <div class="row flex full">
          <div class="row full">
            <button class="gn-button pm-button full" @click="next">
              Next (N)
            </button>
          </div>
          <div class="row full">
            <button class="gn-button pm-button full" @click="first">
              First (M)
            </button>
          </div>
          <div class="row full">
            <button class="gn-button pm-button full" @click="last">
              Last (L)
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["closeModal", "text", "next", "first", "last"],
};
</script>
