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
    <div style="margin-top: 20px">公告类活动发布</div>
    <div>
      <div ref="editor" style=" width: 700px;text-align:left">
        <p>初始化内容</p>
      </div>
      <button v-on:click="getContent">查看内容</button>
    </div>
  </div>
</template>

<script>
  import E from  'wangeditor'
  export default {
        name: "ManagerEdit",
      data(){
          return {
            editorContent:''
          }
      },
      methods:{
          getContent:function () {
            alert(this.editorContent);
          }
      },
      mounted(){
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
            '#ffffff'
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
                alt: '[坏笑]',
                src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
              },
              {
                alt: '[舔屏]',
                src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
              }
            ]
          },
          {
            // tab 的标题
            title: 'emoji',
            // type -> 'emoji' / 'image'
            type: 'emoji',
            // content -> 数组
            content: ['😀', '😃', '😄', '😁', '😆']
          }
        ];
        editor.customConfig.uploadImgShowBase64 = true ;  // 使用 base64 保存图片
        //配置服务器端地址
        //editor.customConfig.uploadImgServer = 'http://localhost:3000/activityEdit';
        editor.create();
      }
    }
</script>

<style scoped>

</style>
