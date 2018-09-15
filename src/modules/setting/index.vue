<style lang="scss" scope>
@import "../../assets/css/common.scss";
.container {
  width: 100%;
  
  .menus{
    margin-top: px2rem(30px);
  }
.btn_box{
  margin-top: px2rem(90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  .logout_btn{
    width: 85%;
    color: #fff;
    background-color: $baseColor;
  }
}
}
</style>
<template>
    <div class="container">
      <div class="menus">
        <mt-cell class="menu" title="交易密码设置" is-link>
          <img slot="icon" class="menu_img"  src="../../assets/img/setting-lock.png" width="24" height="24">
        </mt-cell>
        <mt-cell class="menu" title="意见反馈" is-link>
          <img slot="icon" class="menu_img"  src="../../assets/img/setting-feedback.png" width="24" height="24">
        </mt-cell>
        <mt-cell class="menu" title="清除缓存">
          <img slot="icon" class="menu_img"  src="../../assets/img/setting-clear.png" width="24" height="24">
        </mt-cell>
      </div>
      <div class="btn_box">
        <mt-button @click="logout" class="logout_btn">退出当前账号</mt-button>
      </div>
    </div>
</template>
<script>
import UserService from "../../services/user";
import CONSTS from "../../config/CONST"
export default {
  name: "index_me",
  methods: {},
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {
    this.$loading.close();
  },
  methods: {
      logout() {
          UserService.logout().then(res => {
            localStorage.removeItem(CONSTS.LOCALSTORAGE.ACCESS_TOKEN)
            localStorage.removeItem(CONSTS.LOCALSTORAGE.USER_INFO)
            this.$router.push("/login")
          }).catch(err => {
            this.$toast(err.msg)
          })
          
      }
  }
};
</script>



