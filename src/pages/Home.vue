<script setup>
import "../assets/styles/pages/home.scss";
</script>
<template>
  <div class="box">
    <div class="box-container">
      <h1 class="main-title">The Range</h1>
      <router-link to="/random-words" class="gn-button pm-button full"
        >Random Words</router-link
      >
      <router-link to="/speed-reading" class="gn-button pm-button full"
        >Speed Reading</router-link
      >
    </div>
  </div>
</template>
