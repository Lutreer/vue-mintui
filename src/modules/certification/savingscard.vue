<template>
    <div>
        <div class="warn_infon">
            <img src="../../assets/img/common/warn.png" alt="">
            请绑定持卡人本人的银行卡。
        </div>
        <div class="fields">
            <div class="field">
                <mt-field label="真实姓名" placeholder="请输入本人真实姓名" v-model="userName" :readonly="true"></mt-field>
            </div>
            <div class="field" style="display:flex;justify-content: space-between;align-items: center;">
                <mt-field style="flex:1;" label="储蓄卡卡号" placeholder="请输入本人储蓄卡号" :attr="{maxlength:19}" v-model="depositcard"></mt-field>
                <!-- <img src="../../assets/img/common/camera.png" height="18px" width="22px"> -->
            </div>
            <div class="field">
                <mt-field label="预留手机号" placeholder="请输入银行卡预留手机号" :attr="{maxlength:11}"  v-model="tel"></mt-field>
            </div>
            <div class="field" style="border-bottom:0px;display:flex;justify-content: space-between;align-items: center;">
                <mt-field style="flex:1;" label="手机验证码" :attr="{maxlength:6}"  placeholder="请输入短信验证码" v-model="smsCode"></mt-field>
                <mt-button @click="getSmsCode" class="short_message_btn" size="small" :disabled="smsCodeDisable">获取</mt-button>
            </div>
        </div>
        <div class="normal_infon">
            注：信息仅用于身份验证，诸葛信用管家保障您的信息安全。
        </div>

        <div class="btns">
            <mt-button size="large" @click="submit">提交</mt-button>
        </div>
        
    </div>
</template>
<script>
import CONSTS from "../../config/CONST";
import CardService from "../../services/card";
import SystemService from "../../services/system";
import Validator from "../../utils/validator";
export default {
  name: "certification_savingscard",
  data() {
    return {
      userName: "",
      idcardNum: "",
      depositcard: "",
      tel: "",
      smsCode: "",
      smsCodeDisable: false,

      smsCodeCountdown: 60
    };
  },
  methods: {
    getSmsCode() {
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
    submit() {
      if (this.$_.isEmpty(this.depositcard)) {
        this.$toast("请输入储蓄卡卡号");
        return;
      }
      if (this.$_.isEmpty(this.tel + "")) {
        this.$toast("请输入手机号");
        return;
      }
      if (this.$_.isEmpty(this.smsCode)) {
        this.$toast("请输入手机验证码");
        return;
      }

      if (!Validator.bankNum(this.depositcard).status) {
        this.$toast("请输入正确的储蓄卡卡号");
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
      CardService.addDepositcard({
        type: 0,
        identityCard: this.idcardNum,
        userName: this.userName,
        depositcard: this.depositcard,
        smsCode: this.smsCode,
        tel: this.tel
      })
        .then(res => {
          window.localStorage.setItem(
            CONSTS.LOCALSTORAGE.CERTIFICATION_SUCCESS,
            CONSTS.LOCALSTORAGE.CERTIFICATION_SUCCESS
          );
          this.$router.push("/index");
        })
        .catch(err => {
          this.$toast("操作失败");
        });

      window.localStorage.setItem(
        CONSTS.LOCALSTORAGE.CERTIFICATION_SUCCESS,
        CONSTS.LOCALSTORAGE.CERTIFICATION_SUCCESS
      );
      this.$router.push("/index");
    }
  },
  created() {
    let userInfo = this.$getUserInfo();
    if (userInfo.userName.length > 0 && userInfo.cardNo.length === 18) {
      this.userName = userInfo.userName;
      this.idcardNum = userInfo.cardNo;
      this.$loading.close();
    } else {
      this.$router.push("/index");
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.idcards {
  display: flex;
  justify-content: space-around;
  padding: px2rem(30px);
  background-color: #ffffff;
  .idcard {
    width: px2rem(300px);
  }
}
.warn_infon {
  display: flex;
  font-size: px2rem(22px);
  color: #999;
  padding: px2rem(10px) px2rem(36px);
  img {
    width: px2rem(30px);
    height: px2rem(30px);
    margin-right: px2rem(10px);
  }
}
.fields {
  background-color: #ffffff;
  text-align: left;
  .field {
    padding: px2rem(15px) px2rem(20px) px2rem(15px) px2rem(20px);
    border-bottom: 1px solid #eee;
    .short_message_btn {
      background-color: $baseColor;
      color: #ffffff;
    }
  }
}
.normal_infon {
  display: flex;
  font-size: px2rem(22px);
  color: #999;
  padding: px2rem(10px) px2rem(36px);
  margin-top: px2rem(10px);
  img {
    width: px2rem(28px);
    height: px2rem(32px);
    margin-right: px2rem(10px);
  }
}
.btns {
  padding: 0 px2rem(38px);
  margin-top: px2rem(50px);
  button {
    background-color: $baseColor;
    color: #ffffff;
  }
}
</style>
