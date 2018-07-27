<template>
    <div class="sub_container">
        <mt-field placeholder="账号" v-model="accountName"></mt-field>
        <mt-field placeholder="密码" type="password" v-model="password"></mt-field>
        <mt-button size="large" type="primary" @click="login">登录</mt-button>
    </div>
    
</template>
<script>
import UserService from '../services/user'
export default {
  name: "login",
  data() {
    return {
        accountName: '13937536565',
        password: 'ljy614724',
    };
  },
  computed: {
    
  },
  methods: {
      login(){
          UserService.login({
              accountName: this.accountName,
              password: this.password,
              loginType: 'mobile'
          }).then(res => {
              this.$router.push('/index')
          }).catch(err => {
              debugger
              this.$toast(err.msg)
          })
      }
  },
  mounted() {
      this.$loading.close()
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/fun.scss";

</style>
