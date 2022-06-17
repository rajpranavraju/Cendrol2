<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CendrolMain></CendrolMain>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CendrolMain from './components/CendrolMain/CendrolMain.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    CendrolMain
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap');
</style>
