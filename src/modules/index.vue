<template>
    <div class="index_root">
        <div class="tab_container">
          <!-- <keep-alive> -->
            <router-view></router-view>
          <!-- </keep-alive> -->
        </div>
        <mt-tabbar class="bottom_tabs"  fixed>
          <mt-tab-item id="home" @click.native="changeTab('home')">
              <img v-if="selected == 'home'" slot="icon" src="../assets/img/tab-home-active.png">
              <img v-else slot="icon" src="../assets/img/tab-home.png">
              首页
          </mt-tab-item>
          <mt-tab-item id="shop" @click.native="changeTab('shop')">
              <img v-if="selected == 'shop'" slot="icon" src="../assets/img/tab-shop-active.png">
              <img v-else slot="icon" src="../assets/img/tab-shop.png">
              云商
          </mt-tab-item>
          <mt-tab-item id="card" @click.native="changeTab('card')">
              <img v-if="selected == 'card'" slot="icon" src="../assets/img/tab-card-active.png">
              <img v-else slot="icon" src="../assets/img/tab-card.png">
              卡券
          </mt-tab-item>
          <mt-tab-item id="me" @click.native="changeTab('me')">
              <img v-if="selected == 'me'" slot="icon" src="../assets/img/tab-me-active.png">
              <img v-else slot="icon" src="../assets/img/tab-me.png">
              我的
          </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import {mapGetters, mapState} from 'vuex'
import UserService from '../services/user'
import CONSTS from '../config/CONST'
export default {
  name:'index',
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      title: state => state.header.title,
      selected: state => state.tab
    })
  },
  methods: {
    changeTab(tab) {
      this.$router.push(`/index/${tab}`)
    }
  },
  mounted() {

    let userInfo = this.$getUserInfo();
    UserService.identityInfo()
      .then(res => {
        Object.assign(userInfo, res.object);
        localStorage.setItem(
          CONSTS.LOCALSTORAGE.USER_INFO,
          JSON.stringify(userInfo)
        );
      })
      .catch(err => {
        this.$toast(err.msg);
      });

    // this.$nextTick(() => {
    //   setTimeout(() => {
    //     this.$loading.close()
    //   }, 3000);
    // });
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/common.scss";
.index_root{
  padding-bottom: px2rem(110px);
  
  .tab_container {
  
  }
.bottom_tabs{
  user-select: none;
}
}

</style>



