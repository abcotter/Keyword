<template>
  <div class="Home">
    <navbar/>
    <h3>
      Upload your PDF below and we'll find major keywords!<br>
    </h3>
    <button>Find Keywords</button>
  </div>
</template>

<script>
import navbar from './navbar.vue'

export default {
  name: 'Home',
  components: {
    navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>