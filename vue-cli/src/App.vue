<template>
  <div id="app">
    <navbar/>
    <router-view v-on:recievedData="findKeywords"></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  },
  methods: {
    findKeywords: function (text) {
      console.log(text)
      this.$router.push({ path: 'keywords', params: {body: "text"}})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
