<template>
    <div class="container">
      <div class="card">
          <img src="../../assets/img/certification-bind-phone.png" alt="">
      </div>
      <div class="input_contents">
          <div class="input_content">
        <p>预留手机号</p>
        <div class="field">
          <mt-field placeholder="输入手机号" :attr="{maxlength:11}" v-model="tel"></mt-field>
        </div>
        
      </div>
      <div class="input_content">
        <p>验证码</p>
        <div class="field">
          <mt-field placeholder="输入验证码" :attr="{maxlength:6}" v-model="smsCode">
            <mt-button size="small" class="code_btn" @click="getSmsCode" :disabled="smsCodeDisable">获取</mt-button>
          </mt-field>
        </div>
        
      </div>
      </div>


      <div class="next" @click="finish">完成</div>
    </div>
    
</template>
<script>
import CONSTS from "../../config/CONST";
import SystemService from "../../services/system";
import CardService from "../../services/card";
import Validator from "../../utils/validator";
export default {
  name: "certification_checkFound-card",
  data() {
    return {
      cardNum: "",
      date: "",
      code: "",

      smsCode: "",
      tel: "",
      smsCodeDisable: false,

      smsCodeCountdown: 60
    };
  },
  computed: {},
  methods: {
    getSmsCode() {
      if (this.$_.isEmpty(this.tel + "")) {
        this.$toast("请输入手机号");
        return;
      }
      if (!Validator.phone(this.tel).status) {
        this.$toast("请输入正确的手机号");
        return;
      }
      this.smsCodeDisable = true;
      SystemService.getSmsCode(this.tel, CONSTS.SMS_CODE_TYPE.ORTHER)
        .then(res => {
          setTimeout(() => {
            this.smsCodeDisable = false;
          }, this.smsCodeCountdown * 1000);
          this.$toast("已发送");
        })
        .catch(err => {
          this.smsCodeDisable = false;
          this.$toast("发送失败");
        });
    },
    finish() {
      if (
        !Validator.bankNum(this.cardNum).status ||
        !Validator.cardExpiry(this.date).status ||
        !Validator.cardCaptcha(this.code).status
      ) {
        this.$router.push("/index/home");
        return;
      }

      if (this.$_.isEmpty(this.tel + "")) {
        this.$toast("请输入手机号");
        return;
      }
      if (!Validator.phone(this.tel).status) {
        this.$toast("请输入正确的手机号");
        return;
      }
      if (this.smsCode.length == 0) {
        this.$toast("请输入手机验证码");
        return;
      }
      let userInfo = this.$getUserInfo();
      let data = {
        creditcard: this.cardNum,
        smsCode: this.smsCode,
        invalidDate: this.date,
        cvn2: this.code,
        tel: this.tel,

        name: userInfo.userName,
        identityCard: userInfo.cardNo,

        type: 0
      };
      this.$loading.open({
        spinnerType: "triple-bounce"
      });
      CardService.addCreditcard(data)
        .then(res => {
          this.$toast("添加成功");
          setTimeout(() => {
            this.$router.push("/index/home");
          }, 500);
        })
        .catch(err => {
          this.$loading.close();
          this.$toast("添加失败");
        });
    }
  },
  mounted() {
    this.cardNum = this.$route.params.number;
    this.date = this.$route.params.date;
    this.code = this.$route.params.code;
    this.$loading.close();
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card {
    padding: px2rem(10px) px2rem(35px);
    width: px2rem(680px);
    height: px2rem(370px);
    border-radius: px2rem(15px);
    margin-top: px2rem(30px);
    margin-bottom: px2rem(30px);
    justify-content: center;
    display: flex;
    align-items: center;
    img {
      width: 70%;
    }
  }
  .input_contents {
    display: flex;
    padding: px2rem(0px) px2rem(15px) px2rem(0px) px2rem(15px);

    .input_content {
      margin: px2rem(0px) px2rem(15px) px2rem(0px) px2rem(15px);
      width: 100%;
      align-self: flex-start;
      p {
        color: #fed2a3;
        font-size: px2rem(28px);
        margin-left: px2rem(40px);
      }
      .field {
        padding: px2rem(15px) px2rem(0px) px2rem(15px) px2rem(0px);
        border-bottom: 1px solid #eee;
        .code_btn {
          background-color: $baseColor;
          color: #fff;
        }
      }
    }
  }

  .next {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0px;
    color: #fff;
    height: px2rem(80px);
    line-height: px2rem(80px);
    background-color: $baseColor;
  }
}
</style>
