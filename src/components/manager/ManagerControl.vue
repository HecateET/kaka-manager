<template>
  <div>
      <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
          <el-breadcrumb-item :to="{ path: '/control' }"><i class="el-icon-upload"></i>&nbsp;控制台</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
          <el-breadcrumb-item>文章管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    <hr>
    <!--<div style="margin-top: 20px">-->
      <!--<el-button type="primary"  plain @click="getAllActivitys()">全部</el-button>-->
      <!--<el-button type="primary" plain @click="getActivitys()">活动类</el-button>-->
      <!--<el-button type="primary" plain @click="getActivitysGood()">商品类</el-button>-->
    <!--</div>-->
    <el-table
      ref="multipleTable"
      :data="myActivity"
      v-loading="loading"
      tooltip-effect="dark"
      style="width: 100%">

      <el-table-column
        label="序号" type="index"  width="70">
        <template slot-scope="scope">
          <span style="margin-left: 15px">{{ scope.$index+1 }}</span>
        </template>
      </el-table-column>


      <!--<el-table-column-->
        <!--type="selection"-->
        <!--width="50">-->
      <!--</el-table-column>-->

      <el-table-column
        label="文章标题"
        min-width="320">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.activityName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="id"
        min-width="65">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.activityId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="日期"
        width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.activityStartDate }}</span>
        </template>
      </el-table-column>
      <!--<el-table-column-->
        <!--label="活动类型"-->
        <!--width="120">-->
        <!--<template slot-scope="scope">-->
          <!--<div slot="reference" class="name-wrapper">-->
            <!--<el-tag type="info" v-if="scope.row.activityType=='商品'">{{ scope.row.activityType }}</el-tag>-->
            <!--<el-tag size="medium" v-if="scope.row.activityType=='公告'">{{ scope.row.activityType }}</el-tag>-->
          <!--</div>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <el-table-column label="操作" width="250">
        <template slot-scope="scope">
          <el-button type="primary" plain
            size="mini"
            @click="previewEdit(scope.row.activityId, scope.row)">预览</el-button>
          <el-button
            size="mini" type="warning" plain
            @click="updateEdit(scope.row.activityId, scope.row)">修改</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteActivity(scope.$index,scope.row.activityId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      @current-change="loadData()"
      :current-page.sync="pageIndex"
      :total="pageCount"
      :page-size = "pagesize">
    </el-pagination>
    <!--<div style="margin-top: 20px">-->
      <!--<el-button type="danger" @click="deleteAll()">删除已选中</el-button>-->
      <!--<el-button @click="toggleSelection()">取消选择</el-button>-->
    <!--</div>-->
  </div>


</template>

<script>

    export default {
        name: "ManagerControl",
        data() {
          return {
            loading: true,
            activitys:[],
            multipleSelection: [],
            pageIndex:1,
            pagesize:7,
            pageCount:0,
            myActData:[],
          }
        },
      computed:{
        myActivity(){
          return this.myActData;
        }
      },
        methods: {
          loadData() {
            this.myActData = [];
            let start = (this.pageIndex - 1) * this.pagesize;
            let end = start + this.pagesize;
            if(end>=this.pageCount){
              end=this.pageCount
            }
            for (var i = start; i < end; i++) {
              this.myActData.push(this.activitys[i])
            }
          },
          datachang(){
            let item = this.activitys;
            for(let i in item) {
              var time = item[i].activityStartDate;
              var d = new Date(time);
              var M = d.getMonth()+1;
              M = M < 10 ? ('0' + M) : M;
              var D = d.getDate();
              D = D < 10 ? ('0' + D) : D;
              var h = d.getHours();
              h = h < 10 ? ('0' + h) : h;
              var m = d.getMinutes();
              m = m < 10 ? ('0' + m) : m;
              var s = d.getSeconds();
              s = s < 10 ? ('0' + s) : s;
              var times = `${d.getFullYear()}-${M}-${D} ${h}:${m}:${s}`
              item[i].activityStartDate = times;
            }
          },
          getAllActivitys(){
            let _this=this;
            this.$ajax.post(`${this.$store.state.baseURL}/manager/activityManagerment`
            ).then(function (result) {
              _this.activitys = result.data.data;
              _this.datachang();
              _this.pageCount=_this.activitys.length;
              _this.loadData();
            },function (err) {
              console.log(err);
            });
          },
          getActivitysGood(){
            var _this = this;
            this.$ajax.get(`${this.$store.state.baseURL}/manager/activityManagerment/classfic/商品`).then(function (result) {
              _this.activitys = result.data.data;
              _this.datachang();
            },function (err) {
              console.log(err);
            })
          },
          getActivitys(){
            var _this = this;
            this.$ajax.get(`${this.$store.state.baseURL}/manager/activityManagerment/classfic/公告`).then(function (result) {
              _this.activitys = result.data.data;
              _this.datachang();
            },function (err) {
              console.log(err);
            })
          },
          deleteActivity(index,activityId) {
            let _this = this;
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              _this.$ajax.get(`${this.$store.state.baseURL}/manager/activityManagerment/delete/${activityId}`
              ).then(function(result){
                let data = result.data.data;
                // if(data.delete =='fail' && data.reject =='reject' ){
                //   _this.$message({
                //     type: 'warning',
                //     message: '改篇文章不允许删除!'
                //   });
                // }else if(data.delete =='success'){

                  _this.activitys.splice(index,1);
                  _this.$message({
                    type: 'success',
                    message: '删除成功!'
                  });
                  console.log('删除成功');
                // }
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
          previewEdit(activityId,row){
            const href =`${this.$store.state.vueBaseURL}/activitydetail/${activityId}`;
            window.open(href);
          },
          updateEdit(activityId, row) {
            this.$router.push({path:`managerActivityEdit/${activityId}`});
            console.log(activityId, row);

          },
          // toggleSelection(rows) {
          //   if (rows) {
          //     rows.forEach(row => {
          //       this.$refs.multipleTable.toggleRowSelection(row);
          //     });
          //   } else {
          //     this.$refs.multipleTable.clearSelection();
          //   }
          // },
          // handleSelectionChange(val) {
          //   this.multipleSelection = val;
          // },
          // deleteAll(index,row){
          //   console.log();
          // },
        },
        mounted(){
          this.getAllActivitys();
          this.loading=false;
        },

    }
</script>

<style scoped>

</style>
