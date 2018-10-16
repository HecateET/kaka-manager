<template>
  <el-container>
      <el-aside width="200px">
        <app-manager-left></app-manager-left>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
  </el-container>

</template>

<script>
    import ManagerLeft from './manager/ManagerLeft.vue'
    export default {
      name: "ManagerBody",
      components:{
        "app-manager-left":ManagerLeft,
      },
    }
</script>

<style scoped>
  .el-header-color{
    background: #EBF6DF;
  }
  .bread{

  }
</style>
