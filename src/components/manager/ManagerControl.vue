<template>
  <div>
      <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
          <el-breadcrumb-item :to="{ path: '/control' }"><i class="el-icon-upload"></i>&nbsp;控制台</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    <hr>
    <div style="margin-top: 20px">
      <el-button type="primary" plain @click="showAll()">全部</el-button>
      <el-button type="primary" plain @click="showActivity()">活动类</el-button>
      <el-button type="primary" plain @click="showShopping()">商品类</el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">

      <el-table-column
        type="index"  width="55">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        label="文章标题"
        min-width="350">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="日期"
        width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="活动类型"
        width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">预览</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>




    <div style="margin-top: 20px">
      <el-button type="danger" @click="deleteAll()">删除全部</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>


</template>

<script>
    export default {
        name: "ManagerControl",
        data() {
          return {
            tableData: [{
              id:1,
              title:"最新明信片预售公告",
              date: '2016-05-02',
              name: '商品类',
            }, {
              id:2,
              title:"活动公告活动公告",
              date: '2016-05-04',
              name: '公告类',

            }, {
              id:3,
              title:"活动公告活动公告",
              date: '2016-05-01',
              name: '公告类',
            }, {
              id:4,
              title:"活动公告活动公告",
              date: '2016-05-03',
              name: '公告类',
            }],
            multipleSelection: []
          }
        },
        methods: {
          handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete(index, row) {
            console.log(index, row);
          },
          toggleSelection(rows) {
            if (rows) {
              rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
              });
            } else {
              this.$refs.multipleTable.clearSelection();
            }
          },
          handleSelectionChange(val) {
            this.multipleSelection = val;
          },
          deleteAll(index,row){
            console.log();
          }
        }
    }
</script>

<style scoped>

</style>
