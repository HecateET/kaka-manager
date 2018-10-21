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
      :data="activitys"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">

      <el-table-column
        label="序号" type="index"  width="50">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
        </template>
      </el-table-column>


      <el-table-column
        type="selection"
        width="50">
      </el-table-column>

      <el-table-column
        label="文章标题"
        min-width="340">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.activityName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="id"
        min-width="50">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.activityId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="日期"
        width="140">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.activityStartDate }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="活动类型"
        width="120">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag type="info" v-if="scope.row.activityType=='商品'">{{ scope.row.activityType }}</el-tag>
            <el-tag size="medium" v-if="scope.row.activityType=='公告'">{{ scope.row.activityType }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row.activityId, scope.row)">预览</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.row.activityId, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteActivity(scope.$index,scope.row.activityId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px">
      <el-button type="danger" @click="deleteAll()">删除已选中</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>


</template>

<script>
    export default {
        name: "ManagerControl",
        data() {
          return {
            activitys:[],
            multipleSelection: []
          }
        },
        methods: {
          deleteActivity(index,activityId) {
            let _this = this;
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              _this.$ajax.get(`http://localhost:3000/manager/activityManagerment/delete/${activityId}`
              ).then(function(result){
                let data = result.data.data;
                if(data.delete =='fail' && data.reject =='reject' ){
                  _this.$message({
                    type: 'warning',
                    message: '改篇文章不允许删除!'
                  });
                }else if(data.delete =='success'){

                  _this.activitys.splice(index,1);
                  _this.$message({
                    type: 'success',
                    message: '删除成功!'
                  });
                  console.log('删除成功');
                }
              },function (err) {
                console.log(err);
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          },
          handleEdit(index, row) {
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
          },
        },
        mounted(){
          let _this=this;
          this.$ajax.post('http://localhost:3000/manager/activityManagerment'
            ).then(function (result) {
            _this.activitys = result.data.data;
            console.log(_this.activitys);
          },function (err) {
            console.log(err);
          });
        },
        updated(){

        }

    }
</script>

<style scoped>

</style>
