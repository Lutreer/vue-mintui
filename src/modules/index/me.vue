<style lang="scss" scope>
@import "../../assets/css/common.scss";
.container {
  width: 100%;
  .header_bg {
    height: px2rem(550px);
    width: 100%;

    background-image: url("../../assets/img/me-header-bg.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: 0px bottom;

    display: flex;
    align-items: center;
    flex-direction: column;
    .avator {
      flex-shrink: 0;
      width: px2rem(170px);
      height: px2rem(170px);
      margin-top: px2rem(70px);
      background-color: #fff;
      border: px2rem(10px) solid #feb34d;
      border-radius: px2rem(300px) px2rem(300px);
    }
    .username {
      color: #fff;
      font-size: px2rem(36px);
    }
    .earnings {
      display: flex;
      color: #fff;
      padding: px2rem(30px) px2rem(90px);
      width: 85%;
      justify-content: space-between;
      div > p {
        text-align: center;
        font-size: px2rem(32px);
      }
      .left {
        p:first-child {
          font-weight: 800;
        }
        p:last-child {
          font-size: px2rem(32px);
        }
      }

      .right {
        p:first-child {
          font-weight: 800;
        }
        p:last-child {
          font-size: px2rem(32px);
        }
      }
    }
    .header_menu {
      width: 85%;
      padding: px2rem(20px) px2rem(10px);
      display: flex;
      justify-content: space-around;
      background-color: #fff;
      align-items: flex-end;
      margin-bottom: px2rem(-40px);
      border-radius: px2rem(15px);
      box-shadow: 0px 1px 5px #ccc;
      color: #3c3c3c;
      font-size: px2rem(28px);
      .menu_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: px2rem(28px);

        img {
          width: px2rem(40px);
          margin-bottom: px2rem(10px);
        }
      }
    }
  }

  .menus {
    margin-top: px2rem(70px);

    .menu {
      margin-bottom: 1px;
      .mint-cell-wrapper {
        .mint-cell-title {
          .mint-cell-text {
            font-size: px2rem(28px);
          }
        }
      }

      .menu_img {
        margin-left: px2rem(10px);
        margin-right: px2rem(15px);
      }
    }
  }
}
</style>
<template>
    <div class="container">
      <div class="header_bg">
        <img class="avator" src="../../assets/img/tab-home-active.png" alt="">
        <div class="username">{{userInfo.userName}}</div>
        <div class="earnings">
          <div class="left">
            <p>{{userInfo.currentSum | moneyFixed2}}</p>
            <p>当日收益</p>
          </div>
          <div class="right">
            <p>{{userInfo.profitSum | moneyFixed2}}</p>
            <p>累计收益</p>
          </div>
        </div>
        <div class="header_menu">
          <div class="menu_item">
            <img src="../../assets/img/me-detail.png" alt="">
            <span>我的资料</span>
          </div>
          <div class="menu_item">
            <img src="../../assets/img/me-crm.png" alt="">
            <span>客户管理</span>
          </div>
          <div class="menu_item">
            <img src="../../assets/img/me-cards.png" alt="">            
            <span>银行卡包</span>
          </div>
          <div class="menu_item">
            <img src="../../assets/img/me-task.png" alt="">            
            <span>每日任务</span>
          </div>
        </div>
      </div>
      <div class="menus">
        <mt-cell class="menu" title="我的订单" is-link>
          <img slot="icon" class="menu_img"  src="../../assets/img/me-order.png" width="24" height="24">
        </mt-cell>
        <mt-cell class="menu" title="优惠券" is-link>
          <img slot="icon" class="menu_img"  src="../../assets/img/me-discount.png" width="24" height="24">
        </mt-cell>
        <mt-cell class="menu" title="收藏店铺" is-link>
          <img slot="icon" class="menu_img"  src="../../assets/img/me-collect.png" width="24" height="24">
        </mt-cell>
        <mt-cell class="menu" title="安全保障" is-link>
          <img slot="icon" class="menu_img"  src="../../assets/img/me-secure.png" width="24" height="24">
        </mt-cell>
        <!-- <mt-cell class="menu" title="帮助中心" is-link>
          <img slot="icon" class="menu_img"  src="../../assets/img/me-help.png" width="24" height="24">
        </mt-cell> -->
        <mt-cell class="menu" title="关于我们" is-link>
          <img slot="icon" class="menu_img"  src="../../assets/img/me-about.png" width="24" height="24">
        </mt-cell>
        <mt-cell class="menu" title="设置" is-link style="margin-top: 20px;" @click.native="toSetting">
          <img slot="icon" class="menu_img"  src="../../assets/img/me-setting.png" width="24" height="24">
        </mt-cell>
        
      </div>
    </div>
</template>
<script>
import UserService from "../../services/user";
export default {
  name: "index_me",
  methods: {},
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {
    UserService.getNewSumProfits()
      .then(res => {
        this.userInfo = res.agentInfo;
        this.userInfo.userName = this.$getUserInfo().userName;
        this.$loading.close();
      })
      .catch(err => {
        this.$toast(err.msg);
        this.$loading.close();
      });
  },
  methods: {
    toSetting() {
      this.$router.push("/sub/setting_index");
    }
  }
};
</script>



