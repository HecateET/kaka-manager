<template>
  <div>
    <div id="login">
      <div class="col-sm-12"><h3>登录界面</h3></div>
      <div>
        <form class="form-horizontal">
          <div class="form-group">
            <label for="admin" class="col-sm-3 control-label">用户名</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="admin" placeholder="请输入账号">
            </div>
          </div>
          <div class="form-group">
            <label for="password" class="col-sm-3 control-label">密码</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="password" placeholder="请输入密码">
            </div>
          </div>
          <div class="form-group">
            <label for="password" class="col-sm-3 control-label">密码</label>
            <div class="col-sm-8">
              <button>登录</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>


</template>

<script>
    export default {
        name: "ManagerLogin"
    }
</script>

<style scoped>
  #login{
    width: 450px;
    height: 350px;
    margin: 0 auto;
    background-color: chartreuse;
  }
</style>
