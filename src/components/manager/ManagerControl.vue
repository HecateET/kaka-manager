<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        label="文章标题"
        width="300">
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
      <el-table-column label="操作">
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
              title:"最新明信片预售公告",
              date: '2016-05-02',
              name: '商品类',
            }, {
              title:"活动公告活动公告",
              date: '2016-05-04',
              name: '公告类',

            }, {
              title:"活动公告活动公告",
              date: '2016-05-01',
              name: '公告类',
            }, {
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
