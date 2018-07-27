<template>
    <div>
        <div class="tab_container">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
        <mt-tabbar  fixed>
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
import {mapGetters} from 'vuex'
export default {
  name:'index',
  data() {
    return {
      // title: this.$store.getters.getTitle,
      selected: "home"
    };
  },
  computed: {
    ...mapGetters({
      title: "getTitle"
    })
  },
  methods: {
    changeTab(tab) {
      this.selected = tab;
      this.$router.push(`/index/${tab}`)
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$loading.close()
      }, 3000);
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/fun.scss";
.tab_container {
  padding-bottom: 55px;
}
</style>



