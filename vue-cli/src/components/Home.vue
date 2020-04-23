<template>
  <div class="Home">
    <h3>
      Upload your PDF below and we'll find major keywords!<br>
    </h3>
    <Upload @load="text = $event" ></Upload>
  </div>
</template>

<script>
  import Upload from './Upload.vue';

  export default {
    name: 'Home',
    components: {
      Upload
    },
    data: () => ({ text: "" }),
    watch: {
      text: function (newText) {
        this.$emit('recievedData', newText)
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