<template>
  <div class="Home">
    <div class="nav-bar">
    </div>
    <h3>
      Upload your PDF below and we'll find major keywords!<br>
    </h3>
    <button>Find Keywords</button>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
.nav-bar {
    background: linear-gradient(-90deg, rgb(130, 225, 231), rgb(62, 187, 174));
    height: 60px;
    margin-bottom: 15px;
}
</style>