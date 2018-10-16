<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/control' }"><i class="el-icon-upload"></i>&nbsp;控制台</el-breadcrumb-item>
    </el-breadcrumb>
    <hr>
    <h3>欢迎登录拾笺管理后台系统</h3>

    <div class="table-responsive">
      <table class="table">
        <tr>
          <th>id</th>
          <th>文章标题</th>
          <th>发布时间</th>
          <th>活动类习</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>1</td>
          <td>撒法伺机卡拉的身份收到</td>
          <td>2018.10.4</td>
          <td>商品</td>
          <td>删除</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ManagerRight"
    }
</script>

<style scoped>

</style>
