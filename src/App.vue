<template>
  <div id="app">
    <transition name = "animate" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
    <router-view/>
    </transition >
  </div>
</template>

<style lang="scss">
@import './assets/styles/reset';
@import './assets/styles/colors';
</style>
