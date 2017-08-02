<template>
    <div class="container">
        <app-header></app-header>
        <app-main></app-main>
        <router-view></router-view>
    </div>
</template>

<script>
  import Header from './components/header.vue';
  import Main from './components/main.vue';

      export default {
          components: {
              appHeader : Header,
              appMain : Main
          }
      }
</script>

<style>
  * {
    font-family: 'Raleway', sans-serif;
  }
    .center {
        width: 80%;
        margin: auto;
    }
</style>
