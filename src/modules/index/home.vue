<template>
    <div>
      <mt-header class="header" fixed :title="title">
        <div class="header_left"  slot="left"></div>
        <div class="header_right"  slot="right">
          <div class="service"></div>
          <div @click="toMessage" class="message"></div>
        </div>
      </mt-header>
      <div class="content">
          <div class="banner_box">
            <div class="swiper_box">
              <swiper :options="bannerSwiperOption" ref="bannerSwiper">
                <!-- slides -->
                <swiper-slide v-for="img in banners" :key="img.sliderId">
                  <img :src="$CONSTS.SERVERS.IMAGE +  '/' + img.sliderImg" alt="" height="100%">
                </swiper-slide>
                <!-- Optional controls -->
                <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
              </swiper>
              <!-- <img src="../../assets/img/home-banner.png" alt=""> -->
            </div>
            <div class="message-box">
              <div class="message_img"></div>
              <div class="message">
                <swiper :options="noticesSwiperOption" ref="noticesSwiper">
                  <!-- slides -->
                  <swiper-slide v-for="(notice, index) in notices" :key="index">
                    {{notice.titles}}元
                  </swiper-slide>
                  <!-- Optional controls -->
                  <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
                </swiper>
              </div>
            </div>
          </div>

          <div class="cards">
            <div class="card" v-for="card in cardList" :key="card.creditcardId" >
              <div class="header">
                <div class="left">
                  <img :src="'http://' + card.logoUrl" alt="" class="bank_logo">
                  <div class="bank_name">{{card.bank}}</div>
                  <div class="user_name">{{card.name}} {{card.creditcard | cardNumLast4}}</div>
                </div>
                <div class="collection_btn" @click="withdraw(card)">我要提现</div>
              </div>
              <div class="card_content" @click="cardDetail(card)">
                <div class="left">
                  <div class="left">{{card.repaymentDay - day}}</div>
                  <div class="right">
                    <div class="ch">天后到期</div>
                    <div class="date">{{month}}-{{card.repaymentDay}}</div>
                  </div>
                  
                </div>
                <div class="right">
                  <div class="num">{{(card.billamount || "xx.xx") | moneyFixed2}}</div>
                  <div class="ch">本期应还</div>
                </div>
              </div>
              <div class="footer" @click="addPlan(card)">
                  我要代还
              </div>
              <img src="../../assets/img/home-citic-logo.png" alt="" class="bank_logo_bg">
            </div>

          </div>
          <div class="add_btn" @click="addCredit">
            <img src="../../assets/img/common/add.png" alt="">
            添加信用卡
          </div>
      </div>
      <div class="red_packet" @click="redPacket">
        <img src="../../assets/img/home-packet.png" alt="">
      </div>
      <NameCertification :show.sync="showCer"></NameCertification>
      <NameCertificationSuccess :show.sync="showCerSuccss"></NameCertificationSuccess>
    </div>
</template>
<script>
import NameCertification from "components/uni-popup/NameCertification";
import NameCertificationSuccess from "components/uni-popup/NameCertificationSuccess";
import CONSTS from "config/CONST";
import CardService from "services/card";
import SystemService from "services/system";
export default {
  name: "index_home",
  components: {
    NameCertification,
    NameCertificationSuccess
  },
  data() {
    return {
      title: this.$store.state.header.title,
      month: "",
      day: "",
      cardList: [],
      banners: [],
      notices: [],
      showCer: false,
      showCerSuccss: false,

      bannerSwiperOption: {
        slidesPerView: "auto",
        autoplay: true,
        centeredSlides: true,
        spaceBetween: 15
      },
      noticesSwiperOption: {
        // direction: 'vertical',
        slidesPerView: "auto",
        autoplay: true,
        centeredSlides: true,
        spaceBetween: 15
      }
    };
  },
  computed: {
    bannerSwiper() {
      return this.$refs.bannerSwiper.swiper;
    },
    noticesSwiper() {
      return this.$refs.noticesSwiper.swiper;
    }
  },
  methods: {
    redPacket() {
      this.$router.push("/sub/shop_addRedPacket")
    },
    withdraw(card) {
      this.$router.push({
        path: "/sub/withdraw_withdraw",
        query: {
          bankName: card.bank,
          creditCardNum: card.creditcard,
          bankLogo: card.logoUrl
        }
      });
    },
    cardDetail(card) {
      this.$router.push(`/sub/repay_card/${card.creditcardId}`);
    },
    addCredit() {
      this.$router.push(`/sub/certification_checkFound-card`);
    },
    addPlan(card) {
      this.$router.push({
        path: "/sub/repay_addPlan",
        query: {
          bankName: card.bank,
          creditCardNum: card.creditcard,
          creditCardId: card.creditcardId,
          bankLogo: card.logoUrl
        }
      });
    },
    toMessage() {
      this.$router.push('/sub/system_message')
    }
  },
  created() {
    let month = new Date().getMonth() + 1;
    this.month = month.length > 1 ? month : "0" + month;
    this.day = new Date().getDate();

    CardService.getCreditcardList()
      .then(res => {
        this.cardList = res.creditcards;
        this.$loading.close();
        // 实名认证
        if (
          JSON.parse(localStorage.getItem(CONSTS.LOCALSTORAGE.USER_INFO))
            .isPass == 0
        ) {
          this.showCer = true;
        }
      })
      .catch(err => {
        this.$toast(err.msg);
      });
    SystemService.getSwiperImg()
      .then(res => {
        this.banners = res.small;
      })
      .catch(err => {});
    SystemService.getNotices()
      .then(res => {
        this.notices = res.msgRecive;
      })
      .catch(err => {});
  },
  mounted() {
    setTimeout(() => {
      let certificationSuccess = window.localStorage.getItem(
        CONSTS.LOCALSTORAGE.CERTIFICATION_SUCCESS
      );
      if (
        certificationSuccess &&
        certificationSuccess === CONSTS.LOCALSTORAGE.CERTIFICATION_SUCCESS
      ) {
        window.localStorage.removeItem(
          CONSTS.LOCALSTORAGE.CERTIFICATION_SUCCESS
        );
        this.showCerSuccss = true;
      }
    }, 300);
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.header {
  background-color: #fff;
  font-size: px2rem(32px);
  color: black;
  display: flex;
  align-items: center;
  z-index: 9999;

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
    padding: px2rem(44px) px2rem(0px) 0 px2rem(0px);
    .swiper_box {
      height: px2rem(215px);
      width: 100%;
      .swiper-container {
        width: 100%;
        height: 100%;
      }

      .swiper-slide:nth-child(n) {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 85% !important;
      }
    }
    .message-box {
      display: flex;
      align-items: center;
      padding: 0 px2rem(20px) 0 px2rem(44px);
      .message_img {
        height: 40px;
        width: 80px;

        background-image: url("../../assets/img/home-tzxx.png");
        background-size: 66px auto;
        background-position: left;
        background-repeat: no-repeat;
      }
      .message {
        height: 18px;
        width: px2rem(500px);
        align-items: center;
        padding-left: 8px;
        color: #3c3c3c;
        font-size: px2rem(22px);
        border-left: 1px solid #ccc;
        user-select: none;

        .swiper-container {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          text-align: left;
          color: #3c3c3c;
          font-size: px2rem(22px);
          word-break: keep-all;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
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
      user-select: none;
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
          border-radius: px2rem(10px);
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
        text-align: center;
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
    user-select: none;

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


