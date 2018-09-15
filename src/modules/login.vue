<template>
    <div class="sub_container">
      <mt-header style="background-color:#fff; color: #3c3c3c;border-bottom:1px solid #f5f5f5;" title="登录" fixed></mt-header>
      <div class="login_box">
        <p>诸葛信用管家</p>
        <mt-field class="field_item" placeholder="账号" v-model="accountName"></mt-field>
        <mt-field class="field_item" placeholder="密码" type="password" v-model="password"></mt-field>
        <mt-button class="login_btn" size="large" type="primary" @click="login">登录</mt-button>
      </div>
    </div>
    
</template>
<script>
import UserService from "../services/user";
import CONSTS from "../config/CONST";
export default {
  name: "login",
  data() {
    return {
      accountName: "",
      password: ""
    };
  },
  computed: {},
  methods: {
    login() {
      this.$loading.open({
            spinnerType: 'triple-bounce'
        })
      UserService.login({
        accountName: this.accountName,
        password: this.password,
        loginType: "mobile"
      })
        .then(res => {
          localStorage.setItem(
            CONSTS.LOCALSTORAGE.ACCESS_TOKEN,
            res.object.token
          );
          localStorage.setItem(
            CONSTS.LOCALSTORAGE.USER_INFO,
            JSON.stringify(res.object)
          );
          this.$router.push("/index/home");
          // this.$router.go(-1)
        })
        .catch(err => {
          this.$loading.close();
          this.$toast(err.msg);
        });
    }
  },
  mounted() {
    this.$loading.close();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/common.scss";
.sub_container{
  height: 100%;
  background-color: #fff;
  padding: px2rem(50px);

.login_box{
  margin-top: px2rem(50px);
  p{
    margin-top: px2rem(80px);
    margin-bottom: px2rem(20px);
    font-size: px2rem(32px);
    text-align: center;
    color: #3c3c3c;
  }
}
  .field_item{
    border-bottom: 1px solid #f5f5f5;
  }

  .login_btn{
    margin-top: px2rem(40px);
    background-color: $baseColor;
  }
}
</style>
