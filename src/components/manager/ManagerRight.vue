<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/control' }"><i class="el-icon-upload"></i>&nbsp;控制台</el-breadcrumb-item>
    </el-breadcrumb>
    <hr>
    <h3>欢迎登录拾笺管理后台系统</h3>

  </div>
</template>

<script>
    export default {
        name: "ManagerRight"
    }
</script>

<style scoped>

</style>
