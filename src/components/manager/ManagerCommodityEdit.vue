<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
        <el-breadcrumb-item :to="{ path: '/control' }"><i class="el-icon-upload"></i>&nbsp;控制台</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品发布</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <hr>
    <div style="margin-top: 20px">商品类活动发布</div>
  </div>
</template>

<script>
    export default {
        name: "ManagerCommodity"
    }
</script>

<style scoped>

</style>
