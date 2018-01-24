<template>
  <div id="app">
    <list-app></list-app>
  </div>
</template>

<script>
  import List from './components/List.vue';
  import Modal from './components/Modal.vue';

  export default {
    components: {
      'list-app': List,
      'modal-app': Modal
    },
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
