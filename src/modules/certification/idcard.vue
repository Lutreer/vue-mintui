<template>
    <div>
        <div class="idcards">
            <div class="idcard">
                <img src="../../assets/img/idcard-1.png" alt="">
            </div>
            <div class="idcard">
                <img src="../../assets/img/idcard-2.png" alt="">
            </div>
        </div>
        <div class="warn_infon">
            <img src="../../assets/img/common/warn.png" alt="">
            请填写您的真实身份信息，以便审核的快速通过。
        </div>
        <div class="fields">
            <div class="field">
                <mt-field label="真实姓名" placeholder="请输入本人真实姓名" :attr="{maxlength: 30}" v-model="userName"></mt-field>
            </div>
            <div class="field" style="border-bottom:0px">
                <mt-field label="身份证号码" placeholder="请输入本人真实身份证号" type="number" :attr="{maxlength:18}" v-model="idcardNum"></mt-field>
            </div>
        </div>
        <div class="normal_infon">
            <img src="../../assets/img/idcard-shield.png" alt="">
            信息仅用于身份验证，诸葛信用管家保障您的信息安全。
        </div>

        <div class="btns">
            <mt-button size="large" @click="nextStep">下一步</mt-button>
        </div>
        
    </div>
</template>
<script>
import Validator from "utils/validator";
import UserService from "services/user";
import CONSTS from "config/CONST";
export default {
  name: "certification_idcard",
  data() {
    return {
      userName: "",
      idcardNum: ""
    };
  },
  methods: {
    nextStep() {
      if (this.$_.isEmpty(this.userName)) {
        this.$toast("请输入姓名");
        return;
      }
      if (this.$_.isEmpty(this.idcardNum + "")) {
        this.$toast("请输入身份证号");
        return;
      }
      if (!Validator.idcard(this.idcardNum).status) {
        this.$toast("请输入正确的身份证号");
        return;
      }
      this.$loading.open({
        spinnerType: "triple-bounce"
      });
      UserService.certificateName({
        userName: this.userName,
        cardNo: this.idcardNum
      })
        .then(res => {
          let userInfo = this.$getUserInfo();
          userInfo.cardNo = this.idcardNum;
          userInfo.userName = this.userName;
          localStorage.setItem(
            CONSTS.LOCALSTORAGE.USER_INFO,
            JSON.stringify(userInfo)
          );
          this.$router.push("/sub/certification_savingscard");
        })
        .catch(err => {
          this.$loading.close();
          this.$toast("操作失败");
        });
    }
  },
  mounted() {
    this.$loading.close();
  }
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
