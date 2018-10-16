<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand text-color" href="#">LOGO</a>
        <p class="navbar-text text-color">拾笺网站后台管理</p>

      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" v-if="isLogin">

        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown text-color">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">欢迎使用，管理员 <span class="caret"></span></a>
            <ul class="dropdown-menu ">
              <li><a href="#"><span class="glyphicon glyphicon-cog icon-color" aria-hidden="true"></span>&nbsp;&nbsp;资料设置</a></li>
              <li><a href="#"><span class="glyphicon glyphicon-user icon-color" aria-hidden="true"></span>&nbsp;&nbsp;修改密码</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#"><span class="glyphicon glyphicon-home icon-color" aria-hidden="true"></span>&nbsp;&nbsp;返回首页</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#"><span class="glyphicon glyphicon-off icon-color" aria-hidden="true"></span>&nbsp;&nbsp;退出登录</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
    export default {
        name: "ManagerHeader",
      computed:{
        isLogin:""
      }
    }
</script>

<style scoped>
  .navbar, .dropdown-menu {
      background-color: #528970;
    }

  li .text-color, .dropdown .dropdown-toggle {
    color: #FFFEEE;
    font-size: 16px;
  }
  p.text-color{
    color: #FFFEEE;
    font-size: 20px;
  }
  a.text-color{
    vertical-align: center;
    color: #FFFEEE;
    font-size: 30px;
  }
  li .icon-color{
    color: #666666;
  }

</style>
