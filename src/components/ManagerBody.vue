<template>
  <el-container>
    <el-aside width="300px">
      <app-manager-left></app-manager-left>
    </el-aside>
    <el-container>
      <el-header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-upload"></i>&nbsp;控制台</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>

        </el-breadcrumb>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

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
