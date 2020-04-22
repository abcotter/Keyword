<template>
  <div class="Home">
    <button @click="display1">1</button>
    <button @click="display2">2</button>
    <button @click="display3">3</button>
    <h3>
      Upload your PDF below and we'll find major keywords!<br>
    </h3>
    <button>Find Keywords</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    display1: function () {
      console.log("display1")
      this.$router.push('foo')
    },

    display2: function () {
      console.log("display2")
      this.$router.push('/')
    },

    display3: function () {
      console.log("display3")
    }
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