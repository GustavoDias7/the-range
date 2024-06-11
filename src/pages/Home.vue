<template>
  <div class="global-background" id="home">
    <div class="box">
      <div class="box-container">
        <h1 class="main-title">The Range</h1>
        <router-link to="/random-words" class="gn-button pm-button full"
          >Random Words</router-link
        >
        <br />
        <router-link to="/random-question" class="gn-button pm-button full"
          >Random Question</router-link
        >
        <br />
        <router-link to="/random-advices" class="gn-button pm-button full"
          >Random Advices</router-link
        >
        <br />
        <router-link to="/guided-reading" class="gn-button pm-button full"
          >Guided Reading</router-link
        >
        <br />
        <router-link to="/john-place" class="gn-button pm-button full"
          >John Place</router-link
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/styles/pages/home.scss";
</style>
