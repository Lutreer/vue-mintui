<template>
    <div>
      <mt-header class="header" fixed :title="title">
        <div class="header_left"  slot="left"></div>
        <div class="header_right"  slot="right">
          <div class="service"></div>
          <div class="message"></div>
        </div>
      </mt-header>
      <div class="content">
          <div class="banner_box">
            <img src="../../assets/img/home-banner.png" alt="">
            <div class="message-box">
              <div class="message_img"></div>
              <div class="message">张**完成一笔现金交易，获得100元现金奖励。</div>
            </div>
          </div>

          <div class="cards">
            <div class="card" v-for="i in [1,2,3,4]" :key="i" >
              <div class="header">
                <div class="left">
                  <img src="../../assets/img/home-citic-logo.png" alt="" class="bank_logo">
                  <div class="bank_name">中信银行</div>
                  <div class="user_name">鹿昆鹏 2048</div>
                </div>
                <div class="collection_btn" @click="repay(i)">我要收款</div>
              </div>
              <div class="card_content">
                <div class="left">
                  <div class="left">05</div>
                  <div class="right">
                    <div class="ch">天后到期</div>
                    <div class="date">06-20</div>
                  </div>
                  
                </div>
                <div class="right">
                  <div class="num">12312.23</div>
                  <div class="ch">本期应还</div>
                </div>
              </div>
              <div class="footer">
                  智能还款
              </div>
              <img src="../../assets/img/home-citic-logo.png" alt="" class="bank_logo_bg">
            </div>

          </div>
          <div class="add_btn" @click="addCredit">
            <img src="../../assets/img/common/add.png" alt="">
            添加信用卡
          </div>
      </div>
      <div class="red_packet">
        <img src="../../assets/img/home-packet.png" alt="">
      </div>
      <NameCertification :show.sync="showCer"></NameCertification>
      <NameCertificationSuccess :show.sync="showCerSuccss"></NameCertificationSuccess>
    </div>
</template>
<script>
import NameCertification from "components/uni-popup/NameCertification";
import NameCertificationSuccess from "components/uni-popup/NameCertificationSuccess";
import CONST from "../../config/CONST";
export default {
  name:'index_home',
  components: {
    NameCertification,
    NameCertificationSuccess
  },
  data() {
    return {
      title: this.$store.state.header.title,
      showCer: true,
      showCerSuccss: false,
    };
  },
  methods: {
    repay(param) {
      this.$router.push(`/sub/repay_repay/${param}`)
    },
    addCredit(){
      this.$router.push(`/sub/certification_checkFound-card`)
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$loading.close()
        // this.showCer = true

        let certificationSuccess = window.localStorage.getItem(CONST.LOCALSCORAGE.CERTIFICATION_SUCCESS)
      if (
        certificationSuccess &&
        certificationSuccess === CONST.LOCALSCORAGE.CERTIFICATION_SUCCESS
      ) {
        this.showCer = false
        window.localStorage.removeItem(
          CONST.LOCALSCORAGE.CERTIFICATION_SUCCESS
        );
        this.showCerSuccss = true

      }
      }, 1000)

      
    })
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/fun.scss";
.header {
  background-color: #fff;
  font-size: px2rem(32px);
  color: black;
  display: flex;
  align-items: center;

  .header_left {
    height: 40px;
    width: 40px;

    background-image: url("../../assets/img/home-gift.png");
    background-size: 30px auto;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .header_right {
    display: flex;
    justify-content: flex-end;
    .service {
      height: 40px;
      width: 40px;

      background-image: url("../../assets/img/home-service.png");
      background-size: 25px auto;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .message {
      height: 40px;
      width: 40px;

      background-image: url("../../assets/img/home-message.png");
      background-size: 22px auto;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
}

.content {
  padding-top: px2rem(40px);
  .banner_box {
    background-color: #fff;
    padding: px2rem(44px) px2rem(44px) 0 px2rem(44px);

    .message-box {
      display: flex;
      align-items: center;
      .message_img {
        height: 40px;
        width: 80px;

        background-image: url("../../assets/img/home-tzxx.png");
        background-size: 66px auto;
        background-position: left;
        background-repeat: no-repeat;
      }
      .message {
        display: flex;
        height: 18px;
        width: px2rem(460px);
        align-items: center;
        padding-left: 8px;
        color: #3c3c3c;
        font-size: px2rem(22px);
        border-left: 1px solid #ccc;
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .cards {
    padding: px2rem(35px) px2rem(35px) px2rem(0px) px2rem(35px);

    .card {
      position: relative;
      widows: 100%;
      border-radius: 10px;
      box-shadow: 0 0 15px #ccc;
      background-color: #fff;
      padding: px2rem(30px);
      overflow: hidden;
      margin-bottom: px2rem(28px);
      .header {
        display: flex;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;

          .bank_logo {
            width: px2rem(50px);
            height: px2rem(50px);
          }
          .bank_name {
            margin-left: 10px;
            font-size: px2rem(28px);
          }
          .user_name {
            color: #999999;
            margin-left: 10px;
            font-size: px2rem(24px);
          }
        }

        .collection_btn {
          height: 30px;
          border-radius: px2rem(16px);
          display: flex;
          font-size: px2rem(24px);
          align-items: center;
          padding: px2rem(0px) px2rem(25px);
          border: 1px solid #e83454;
          color: #e83454;
        }
      }
      .card_content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: px2rem(20px) px2rem(0px);
        margin: px2rem(20px) px2rem(0px);
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        .left {
          display: flex;
          align-items: center;
          .left {
            color: #e83454;
            font-size: px2rem(60px);
          }
          .right {
            display: flex;
            flex-direction: column;
            margin-left: px2rem(8px);
            text-align: left;
            .ch {
              font-size: px2rem(24px);
              color: #e83454;
            }
            .date {
              font-size: px2rem(22px);
              color: #999999;
            }
          }
        }
        .right {
          margin-right: px2rem(10px);
          text-align: left;
          .num {
            font-size: px2rem(30px);
            color: #3c3c3c;
          }
          .ch {
            font-size: px2rem(22px);
            color: #999999;
          }
        }
      }
      .footer {
        font-size: px2rem(32px);
        color: #e83454;
      }

      .bank_logo_bg {
        height: 90%;
        bottom: -25%;
        right: -11%;
        position: absolute;
        opacity: 0.1;
      }
    }
  }
  .add_btn {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: px2rem(30px);
      margin-right: px2rem(20px);
    }
    height: px2rem(76px);
    border-radius: px2rem(14px);
    padding: px2rem(15px) px2rem(0px);
    margin: 0 auto;
    margin-bottom: px2rem(150px);
    width: 90%;
    border: 1px solid #c3c3c3;
    font-size: px2rem(28px);
  }
}
.red_packet {
  position: fixed;
  bottom: px2rem(140px);
  right: px2rem(50px);

  img {
    width: px2rem(100px);
  }
}
</style>


