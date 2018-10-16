<template>
  <div id="app">
    <app-manager-header></app-manager-header>

    <router-view/>
  </div>
</template>

<script>
  import ManagerHeader from './components/ManagerHeader.vue'
export default {
  name: 'App',
  components:{
    "app-manager-header":ManagerHeader,
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
