<template>
  <div id="loginVue">
    <div id="login">
      <h3 style="text-align: center; margin: 0px;">登 录</h3>
      <el-form label-width="60px" class="loginForm">
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-button class="loginBtn"  type="primary" @click="doLogin()">登录</el-button>
      </el-form>
    </div>
  </div>


</template>

<script>
  import {mapGetters} from "vuex"
    export default {
        name: "ManagerLogin",
      data(){
          return{
            username:'',
            password:'',
          }
      },
      computed: mapGetters([
        "isLogin",
        "userId"
      ]),
      methods: {
          doLogin() {
            let _this =this;
            console.log(this.username);
            console.log(this.password);
            this.$ajax.post(`${this.$store.state.baseURL}/manager/doLogin`,
              {
                username: _this.username,
                password: _this.password
              }).then(function (result) {
              if (result.data.data.userUnExsit) {
                alert("用户名错误");
              } else if (result.data.data.passwordWrong) {
                alert("密码错误");
              } else if (result.data.data.loginSucess) {
                alert("登录成功");
                localStorage.setItem("managerId", _this.username);
                location.href = `/`;
              } else {
                alert("服务器错误");
              }
            }, function (err) {
              console.log(err);
            })
          }
      }

    }
</script>

<style scoped>
#loginVue{
  width: 100%;
  height: 430px;
}
  #login{
    width: 450px;
    height: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
  .loginForm{
    margin-top: 30px;
  }
  .loginBtn{
    width: 385px;
  }
</style>
