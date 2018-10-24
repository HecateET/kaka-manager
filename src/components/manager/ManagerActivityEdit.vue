<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
        <el-breadcrumb-item :to="{ path: '/control' }"><i class="el-icon-upload"></i>&nbsp;控制台</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动发布</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <hr>
    <div style="margin: 10px">公告类活动发布</div>
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
      </el-form>
    </div>
     <div>
      <div ref="editor" style=" width: 700px;text-align:left"></div>
    </div>
    <hr>
    <el-row>
        <el-button v-on:click="publish()" type="primary">发布</el-button>
        <el-button v-on:click="cancelPublish()" type="danger">取消</el-button>
    </el-row>

  </div>
</template>

<script>

  import E from  'wangeditor'
  export default {
        name: "ManagerEdit",
      data(){
        return {
          editorContent:'',
          activityEdit: {
            title: '',
            type: '公告',
            date: '',
          },
        };
      },
    methods: {
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
                src:'http://localhost:3000/eoim/1.png'
              },
              {
                alt:'[哭笑]',
                src:'http://localhost:3000/eoim/2.png'
              },
              {
                alt:'[坏笑]',
                src:'http://localhost:3000/eoim/3.png'
              },
              {
                alt:'[苦笑]',
                src:'http://localhost:3000/eoim/4.png'
              },
              {
                alt:'[嘴馋]',
                src:'http://localhost:3000/eoim/5.png'
              },
              {
                alt:'[你好]',
                src:'http://localhost:3000/eoim/6.png'
              },
              {
                alt:'[右哼哼]',
                src:'http://localhost:3000/eoim/7.png'
              },
              {
                alt:'[左哼哼]',
                src:'http://localhost:3000/eoim/8.png'
              },
              {
                alt:'[吃瓜]',
                src:'http://localhost:3000/eoim/9.png'
              },
              {
                alt:'[大骂]',
                src:'http://localhost:3000/eoim/10.png'
              },
              {
                alt:'[微笑]',
                src:'http://localhost:3000/eoim/11.png'
              },
              {
                alt:'[色]',
                src:'http://localhost:3000/eoim/12.png'
              },
              {
                alt:'[亲亲]',
                src:'http://localhost:3000/eoim/13.png'
              },
              {
                alt:'[卖萌]',
                src:'http://localhost:3000/eoim/14.png'
              },
              {
                alt:'[调皮]',
                src:'http://localhost:3000/eoim/15.png'
              },
              {
                alt:'[倒霉]',
                src:'http://localhost:3000/eoim/16.png'
              },
              {
                alt:'[生病]',
                src:'http://localhost:3000/eoim/17.png'
              },
              {
                alt:'[吃瓜]',
                src:'http://localhost:3000/eoim/18.png'
              },
              {
                alt:'[可怜]',
                src:'http://localhost:3000/eoim/19.png'
              },
              {
                alt:'[汗]',
                src:'http://localhost:3000/eoim/20.png'
              },
              {
                alt:'[色色]',
                src:'http://localhost:3000/eoim/21.png'
              },
              {
                alt:'[哈哈]',
                src:'http://localhost:3000/eoim/22.png'
              },
              {
                alt:'[钱]',
                src:'http://localhost:3000/eoim/23.png'
              },
              {
                alt:'[思考]',
                src:'http://localhost:3000/eoim/24.png'
              },
              {
                alt:'[生病]',
                src:'http://localhost:3000/eoim/25.png'
              },
              {
                alt:'[困]',
                src:'http://localhost:3000/eoim/26.png'
              },
              {
                alt:'[互粉]',
                src:'http://localhost:3000/eoim/27.png'
              },
              {
                alt:'[瞌睡]',
                src:'http://localhost:3000/eoim/28.png'
              },
              {
                alt:'[机智]',
                src:'http://localhost:3000/eoim/29.png'
              },
              {
                alt:'[害羞]',
                src:'http://localhost:3000/eoim/30.png'
              },
              {
                alt:'[鼻孔]',
                src:'http://localhost:3000/eoim/31.png'
              },
              {
                alt:'[疑惑]',
                src:'http://localhost:3000/eoim/32.png'
              },
              {
                alt:'[大哭]',
                src:'http://localhost:3000/eoim/33.png'
              },
              {
                alt:'[打你]',
                src:'http://localhost:3000/eoim/34.png'
              },
              {
                alt:'[挣扎]',
                src:'http://localhost:3000/eoim/35.png'
              },
              {
                alt:'[大笑]',
                src:'http://localhost:3000/eoim/36.png'
              },
              {
                alt:'[吃惊]',
                src:'http://localhost:3000/eoim/37.png'
              },
              {
                alt:'[晕乎]',
                src:'http://localhost:3000/eoim/38.png'
              },
              {
                alt:'[鄙视]',
                src:'http://localhost:3000/eoim/39.png'
              },
              {
                alt:'[嫌弃]',
                src:'http://localhost:3000/eoim/40.png'
              },
              {
                alt:'[哈欠]',
                src:'http://localhost:3000/eoim/41.png'
              },
              {
                alt:'[哭]',
                src:'http://localhost:3000/eoim/42.png'
              },
              {
                alt:'[生气]',
                src:'http://localhost:3000/eoim/43.png'
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
      //时间格式转换
      changeTime(d){
            let date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
            return date;
          },
      //取消发布
      cancelPublish(){

      },
      //发布文章
      publish:function(){
        var _this = this;
        if(this.activityEdit.title==''){
          alert('文章标题不能为空！');
        }else if(this.activityEdit.type==''){
          alert('文章类型未选择，请选择！');
        }else if(this.activityEdit.date==''){
          alert('发布时间未选择，请填写！');
        }else if(this.editorContent==''){
          alert('文章内容为填写，请补充！');
        } else{
          let date = this.changeTime(this.activityEdit.date);
          this.$ajax.post('http://localhost:3000/manager/activityEdit',{
            acName:_this.activityEdit.title,
            acStartDate:date,
            acType:_this.activityEdit.type,
            acDetails:_this.editorContent
          }).then(function (result) {
            alert("文章发布成功！");
            _this.activityEdit.title = '';
            _this.activityEdit.type = '公告';
            _this.activityEdit.date = '';
            _this.editorContent = ' ';
            console.log('插入成功：'+result.data.data);
          },function (err) {
            console.log(err);
          })
        }

        },
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
  .el-picker-panel,.el-date-picker,.el-popper{
    z-index:20000 !important;
  }
</style>
