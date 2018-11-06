<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
        <el-breadcrumb-item :to="{ path: '/control' }"><i class="el-icon-upload"></i>&nbsp;控制台</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        <el-breadcrumb-item>文章发布</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <hr>
    <el-row>
      <el-col :span="12">
        <div class="form-box">
          <el-row>
            <el-col :span="16">
              <el-form ref="form" :model="activityEdit" label-width="80px" size="mini">
                <el-form-item label="文章名称">
                  <el-input v-model="activityEdit.title"></el-input>
                </el-form-item>
                <!--<el-form-item label="文章类型">-->
                  <!--<el-select v-model="activityEdit.type" placeholder="请选择发布活动的类型">-->
                    <!--<el-option label="公告类" value="公告"></el-option>-->
                  <!--</el-select>-->
                <!--</el-form-item>-->
                <el-form-item label="发布时间">
                  <el-col :span="11">
                    <el-date-picker type="datetime" placeholder="选择日期" v-model="activityEdit.date" style="width: 100%;"></el-date-picker>
                  </el-col>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="span=8">
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div id="myPic">
          <img :src="headpic" alt="" id="loginHead" class="img-responsive" form="updateHead">
          <div id="myFile">
            <input type="file"
                   name="avatar"
                   @change="saveImage($event)"
                   accept="image/gif,image/jpeg,image/jpg,image/png"
                   ref="avatarInput"
                   class="btn"/>
          </div>
        </div>
        <div style="padding-left: 35px; padding-top: 5px">
          <span style="color: #9a9999" v-if="!isSaveHead">点击上传图片</span>
        </div>
      </el-col>
    </el-row>

    <hr>
     <div>
      <div ref="editor" style=" width: 900px;text-align:left"></div>
     </div>
    <hr>
    <el-row>
      <!--<button type="button" @click="publish">发布</button>-->
        <el-button v-on:click="publish()" type="primary" v-if="activityId==''">发布</el-button>
        <el-button v-on:click="updataEdit()" type="primary" v-else>修改</el-button>
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
          upath:'',  //保存选中的文件
          headpic:'',
          isSaveHead: false,
          activityId:"",
        };
      },
    watch:{
      "$route":"getActivity"
    },
    methods: {
      getActivity(editor){
        if(this.$route.params.activityId != undefined){
          this.activityId = this.$route.params.activityId;
          console.log(this.activityId);
          let _this =  this;
          this.$ajax.get(`${this.$store.state.baseURL}/manager/activityManagerment/message/${this.activityId}`)
            .then(function (result) {
              console.log(result.data.data);
              _this.activityEdit.title =result.data.data[0].activityName;
              _this.activityEdit.date = result.data.data[0].activityStartDate;
              _this.headpic = `${axios.defaults.baseURL}${result.data.data[0].activityImage}`;
              var content = result.data.data[0].activityDetails;
              editor.txt.html(content);
            },function (err) {
              console.log(err);
            })
        }
      },
      //创建富文本编辑器
      createEdioter(){
        let _this =this;
        var editor = new E(this.$refs.editor);
        editor.customConfig.onchange = (html)=>{
          this.editorContent = html;
        };
        editor.customConfig.zIndex = 1000;
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
          'image',  // 插入图片
          'emoticon',  // 表情
          'table',  // 表格
          'undo',  // 撤销
          'redo'  // 重复
        ];
        //配置服务器端地址
        //editor.customConfig.uploadImgServer = 'http://localhost:3000/activityEdit';
        editor.customConfig.uploadImgShowBase64 = true;   // 使用 base64 保存图片
        editor.customConfig.uploadImgServer = `${this.$store.state.baseURL}/manager/activityImageUpload`; // 上传图片到服务器
        editor.customConfig.uploadImgHooks = {
          customInsert:function (insertImg,result,editor) {
            if(result.errno ==0){
              console.log('insert ok!');
              insertImg(`${_this.$store.state.baseURL}/activityEdit/${result.data[0]}`);
            }else{
              alert("图片上传失败！");
            }
          }
        }
        editor.create();
        this.getActivity(editor);

      },

      //时间格式转换
      changeTime(d){
        let date;
        if((typeof d) =='object'){
          date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        }else {
          d = new Date(d);
          date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        }
        return date;
      },

      //发布文章
      publish:function(){
          let _this = this;
          if(this.activityEdit.title==''){
            alert('文章标题不能为空！');
          }else if(this.activityEdit.date ==''){
            alert('时间未选择，请填写');
          }else if(this.editorContent ==''){
            alert('文章内容未填写，请补充！')
          }else if(this.upath ==''){
            alert("单站图片未上传！")
          }else{
            let date = this.changeTime(this.activityEdit.date);
            var zipFormData = new FormData();
            zipFormData.append('filename',this.upath[0]);
            zipFormData.append('acName',this.activityEdit.title);
            zipFormData.append('acStartDate',date);
            zipFormData.append('acType',this.activityEdit.type);
            zipFormData.append('acDetails',this.editorContent);
            let config = {
              headers:{'Content-Type':'multipart/form-data'}
            };
            // setTimeout(()=>{
              this.$ajax.post(`${this.$store.state.baseURL}/manager/activityEdit`
                ,zipFormData,config).then(function (response) {
                console.log(response);
                console.log(response.data);
              });
            // },100);
            alert("文章发布成功！");
            _this.activityEdit.title = '';
            _this.activityEdit.type = '公告';
            _this.activityEdit.date = '';
            _this.editorContenttent = '';
            location.href ='/managercontrol';
          }



      },

      saveImage(e) {
        this.upath = e.target.files;
        var inputFile = document.querySelector("[type='file']");
        var reader = new FileReader();
        console.log(this.upath);
        console.log(this.upath[0]);
        reader.onload = function(event) {
          document.querySelector("img").src = `${event.target.result}`;
          document.querySelector("#myPic").style.backgroundColor = "transparent";
        };
        reader.readAsDataURL(inputFile.files[0]);
        this.isSaveHead = true;
      },
      //修改文章保存
      updataEdit() {
        let _this = this;
        if (this.activityEdit.title == '') {
          alert('文章标题不能为空！');
        } else if (this.activityEdit.date == '') {
          alert('时间未选择，请填写');
        } else if (this.editorContent == '') {
          alert('文章内容未填写，请补充！')
        } else if (this.upath == '') {
          alert("单站图片未上传！")
        } else {
          console.log(typeof this.activityEdit.date)
          console.log(this.activityEdit.date);
          let date = this.changeTime(this.activityEdit.date);
          console.log(typeof date);
          console.log(date);
          var zipFormData = new FormData();
          zipFormData.append('filename', this.upath[0]);
          zipFormData.append('acName', this.activityEdit.title);
          zipFormData.append('acStartDate',date);
          zipFormData.append('acType', this.activityEdit.type);
          zipFormData.append('acDetails', this.editorContent);
          zipFormData.append('activityId', this.activityId);
          let config = {
            headers: {'Content-Type': 'multipart/form-data'}
          };
          // setTimeout(()=>{
          this.$ajax.post(`${this.$store.state.baseURL}/manager/activityManagerment/update`
            , zipFormData, config).then(function (response) {
            console.log(response);
            console.log(response.data);
          });
          alert("文章修改成功！");
          _this.activityEdit.title = '';
          _this.activityEdit.type = '公告';
          _this.activityEdit.date = '';
          _this.editorContenttent = '';
          location.href = '/managercontrol';
        }
      },
    },
      mounted(){
         this.createEdioter();
      }
    }
</script>

<style scoped>
  #oDiv{
    height:200px;
    width:200px;
    border:1px solid #000;
    text-align: center;
    margin-bottom: 10px;
  }
  .form-box{
    width: 700px;
  }
  #myPic {
    width: 230px;
    height: 160px;
    border: 1px solid #dcdfe6;
  }

  #myFile {
    width: 230px;
    height: 160px;
    border: 1px solid #dcdfe6;
    background-color: rgba(204,204,204,0.2);

    box-sizing: border-box;
    position: absolute;
    top: -1px;
    /*display: none;*/
  }

  #myPic:hover #myFile {
    display: block;
  }

  [type = "file"] {
    width: 100%;
    height: 100%;
    opacity: 0;
  }


</style>
