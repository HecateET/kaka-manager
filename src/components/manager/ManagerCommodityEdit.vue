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
    <div style="margin: 20px">商品类活动发布</div>
    <div class="form-box">
      <el-form ref="form" :model="activityEdit" label-width="80px" size="mini">
        <el-form-item label="文章名称">
          <el-input v-model="activityEdit.title"></el-input>
        </el-form-item>
        <el-form-item label="文章类型">
          <el-select v-model="activityEdit.type" placeholder="请选择发布活动的类型">
            <el-option label="公告类" value="公告"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-col :span="11">
            <el-date-picker type="datetime" placeholder="选择日期" v-model="activityEdit.date" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <div style="height: 200px;">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>

        </el-form-item>
      </el-form>
    </div>
    <hr>
    <div>
      <div ref="editor" style=" width: 700px;text-align:left"></div>
    </div>
    <hr>
    <!--<el-row>-->
      <!--<el-button v-on:click="publish()" type="primary">发布</el-button>-->
      <!--<el-button v-on:click="cancelPublish()" type="danger">取消</el-button>-->
    <!--</el-row>-->
  </div>
</template>

<script>
  import E from  'wangeditor'
    export default {
        name: "ManagerCommodity",
      data(){
          return{
            editorContent:'',
            activityEdit: {
              title: '',
              type: '公告',
              date: '',
            },
            imageUrl: ''
          }
      },
      methods:{
        //创建富文本编辑器
        createEdioter(){
          var editor = new E(this.$refs.editor);
          editor.customConfig.onchange = (html)=>{
            this.editorContent = html;
          };
          editor.customConfig.colors = [
            '#000000',
            '#eeece0',
            '#1c487f',
            '#4d80bf',
            '#c24f4a',
            '#8baa4a',
            '#7b5ba1',
            '#46acc8',
            '#f9963b',
            '#ffffff',
            '#DB70DB',
            '#cc1d18'
          ];
          // 表情面板可以有多个 tab ，因此要配置成一个数组。数组每个元素代表一个 tab 的配置
          editor.customConfig.emotions = [
            {
              // tab 的标题
              title: '默认',
              // type -> 'emoji' / 'image'
              type: 'image',
              // content -> 数组
              content: [
                {
                  alt:'[吃瓜]',
                  src:`${this.$store.state.baseURL}/eoim/1.png`
                },
                {
                  alt:'[哭笑]',
                  src:`${this.$store.state.baseURL}/eoim/2.png`
                },
                {
                  alt:'[坏笑]',
                  src:`${this.$store.state.baseURL}/eoim/3.png`
                },
                {
                  alt:'[苦笑]',
                  src:`${this.$store.state.baseURL}/eoim/4.png`
                },
                {
                  alt:'[嘴馋]',
                  src:`${this.$store.state.baseURL}/eoim/5.png`
                },
                {
                  alt:'[你好]',
                  src:`${this.$store.state.baseURL}/eoim/6.png`
                },
                {
                  alt:'[右哼哼]',
                  src:`${this.$store.state.baseURL}/eoim/7.png`
                },
                {
                  alt:'[左哼哼]',
                  src:`${this.$store.state.baseURL}/eoim/8.png`
                },
                {
                  alt:'[吃瓜]',
                  src:`${this.$store.state.baseURL}/eoim/9.png`
                },
                {
                  alt:'[大骂]',
                  src:`${this.$store.state.baseURL}/eoim/10.png`
                },
                {
                  alt:'[微笑]',
                  src:`${this.$store.state.baseURL}/eoim/11.png`
                },
                {
                  alt:'[色]',
                  src:`${this.$store.state.baseURL}/eoim/12.png`
                },
                {
                  alt:'[亲亲]',
                  src:`${this.$store.state.baseURL}/eoim/13.png`
                },
                {
                  alt:'[卖萌]',
                  src:`${this.$store.state.baseURL}/eoim/14.png`
                },
                {
                  alt:'[调皮]',
                  src:`${this.$store.state.baseURL}/eoim/15.png`
                },
                {
                  alt:'[倒霉]',
                  src:`${this.$store.state.baseURL}/eoim/16.png`
                },
                {
                  alt:'[生病]',
                  src:`${this.$store.state.baseURL}/eoim/17.png`
                },
                {
                  alt:'[吃瓜]',
                  src:`${this.$store.state.baseURL}/eoim/18.png`
                },
                {
                  alt:'[可怜]',
                  src:`${this.$store.state.baseURL}/eoim/19.png`
                },
                {
                  alt:'[汗]',
                  src:`${this.$store.state.baseURL}/eoim/20.png`
                },
                {
                  alt:'[色色]',
                  src:`${this.$store.state.baseURL}/eoim/21.png`
                },
                {
                  alt:'[哈哈]',
                  src:`${this.$store.state.baseURL}/eoim/22.png`
                },
                {
                  alt:'[钱]',
                  src:`${this.$store.state.baseURL}/eoim/23.png`
                },
                {
                  alt:'[思考]',
                  src:`${this.$store.state.baseURL}/eoim/24.png`
                },
                {
                  alt:'[生病]',
                  src:`${this.$store.state.baseURL}/eoim/25.png`
                },
                {
                  alt:'[困]',
                  src:`${this.$store.state.baseURL}/eoim/26.png`
                },
                {
                  alt:'[互粉]',
                  src:`${this.$store.state.baseURL}/eoim/27.png`
                },
                {
                  alt:'[瞌睡]',
                  src:`${this.$store.state.baseURL}/eoim/28.png`
                },
                {
                  alt:'[机智]',
                  src:`${this.$store.state.baseURL}/eoim/29.png`
                },
                {
                  alt:'[害羞]',
                  src:`${this.$store.state.baseURL}/eoim/30.png`
                },
                {
                  alt:'[鼻孔]',
                  src:`${this.$store.state.baseURL}/eoim/31.png`
                },
                {
                  alt:'[疑惑]',
                  src:`${this.$store.state.baseURL}/eoim/32.png`
                },
                {
                  alt:'[大哭]',
                  src:`${this.$store.state.baseURL}/eoim/33.png`
                },
                {
                  alt:'[打你]',
                  src:`${this.$store.state.baseURL}/eoim/34.png`
                },
                {
                  alt:'[挣扎]',
                  src:`${this.$store.state.baseURL}/eoim/35.png`
                },
                {
                  alt:'[大笑]',
                  src:`${this.$store.state.baseURL}/eoim/36.png`
                },
                {
                  alt:'[吃惊]',
                  src:`${this.$store.state.baseURL}/eoim/37.png`
                },
                {
                  alt:'[晕乎]',
                  src:`${this.$store.state.baseURL}/eoim/38.png`
                },
                {
                  alt:'[鄙视]',
                  src:`${this.$store.state.baseURL}/eoim/39.png`
                },
                {
                  alt:'[嫌弃]',
                  src:`${this.$store.state.baseURL}/eoim/40.png`
                },
                {
                  alt:'[哈欠]',
                  src:`${this.$store.state.baseURL}/eoim/41.png`
                },
                {
                  alt:'[哭]',
                  src:`${this.$store.state.baseURL}/eoim/42.png`
                },
                {
                  alt:'[生气]',
                  src:`${this.$store.state.baseURL}/eoim/43.png`
                },
              ]
            },
            {
              // tab 的标题
              title: 'emoji',
              // type -> 'emoji' / 'image'
              type: 'emoji',
              // content -> 数组
              content: ['😀', '😃', '😄', '😁', '😆','😀','😁','😂','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😗','😙','😚',
                '☺','😇','😐','😑','😶','😏','😣','😥','😮','😯','😪','😫','😴','😌','😛','😜','😝','😒','😓','😔','😕','😲',
                '😷','😖','😞','😟','😤','😢','😭','😦','😧','😨','😬','😰','😱','😳','😵','😡','😠']
            }
          ];
          editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'table',  // 表格
            'undo',  // 撤销
            'redo'  // 重复
          ];
          //配置服务器端地址
          //editor.customConfig.uploadImgServer = 'http://localhost:3000/activityEdit';
          editor.create();
        },
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
      },
      mounted(){
        this.createEdioter();
      }
    }
</script>

<style scoped>
  .form-box{
    width: 500px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
