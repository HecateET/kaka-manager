<template>
  <el-container>
    <el-aside width="300px">
      <app-manager-left></app-manager-left>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>

</template>

<script>
    import ManagerLeft from './manager/ManagerLeft.vue'
    import ManagerControl from './manager/ManagerControl.vue'
    export default {
      name: "ManagerBody",
      components:{
        "app-manager-left":ManagerLeft,
        "app-manager-control":ManagerControl
      },
    }
</script>

<style scoped>

</style>
