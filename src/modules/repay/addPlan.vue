<template>
    <div>
        <div class="bank_box">
          <img :src="'http://' + bankLogo" alt="">
          <div>
            <div>{{bankName}}</div>
            <div>{{userName}} | 尾号{{creditCardNum | cardNumLast4}}</div>
          </div>
            
        </div>
        <div class="fields">
          <div class="field">
            <mt-field label="还款总金额" placeholder="请输入还款总金额" v-model="repayMoney"></mt-field>
          </div>
          <div class="field">
            <mt-field label="手续费" readonly disableClear v-model="serviceMoney"></mt-field>
          </div>
        </div>
        <div class="tips">
            <p>温馨提示：</p>
            <p>信用卡可用额度是为了保障您计划正常执行，请确保实际信用卡可用额度大于软件提示的信用卡可用额度</p>
        </div>
        <div class="btns">
            <mt-button size="large" @click="commit">提交</mt-button>
        </div>
    </div>
</template>
<script>
import Validator from "utils/validator";
import CardService from "services/card";
import CONSTS from "config/CONST";
export default {
  name: "repay_addPlan",
  data() {
    return {
      userName: "",
      bankName: "",
      creditCardNum: "",
      creditCardId: "",
      repayMoney: null,
      bankLogo: ""
    };
  },
  computed: {
    serviceMoney: {
      get: function() {
        return Number(this.repayMoney)
          ? (Number(this.repayMoney) * 0.0065).toFixed(2)
          : Number(0).toFixed(2);
      },
      set: function(repayMoney) {}
    }
  },
  methods: {
    commit() {
      if (Validator.money(this.repayMoney).status) {
        // TODO channel（1000，1010，1100）,plat（CJ、JC）
        let data = {
          creditcardId: this.creditCardId,
          channel: 1000,
          plat: "CJ",
          repaymentSum: this.repayMoney,
          cardType: 1,
          repaymentType: 2 // TODO 智能还款：2, 专家还款：1
        };
        this.$loading.open({
          spinnerType: "triple-bounce"
        });
        CardService.addRepaymentplan(data)
          .then(res => {
            this.$loading.close();
            this.$toast("新建成功");
            setTimeout(() => {
              this.$router.go(-1);
            }, 800);
          })
          .catch(err => {
            this.$loading.close();
            this.$toast(err.msg);
          });
      } else {
        this.$toast("输入金额有误");
      }
    },
    editAmount() {}
  },
  mounted() {
    setTimeout(() => {
      this.$loading.close();
    }, 0);
  },
  created() {
    this.bankName = this.$route.query.bankName;
    this.creditCardNum = this.$route.query.creditCardNum;
    this.creditCardId = this.$route.query.creditCardId;
    this.userName = this.$getUserInfo().userName;
    this.bankLogo = this.$route.query.bankLogo;
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.bank_box {
  padding: px2rem(30px) px2rem(30px);
  background: linear-gradient(to right, #e96d70 45%, #cc4768);
  display: flex;
  align-items: center;
  font-size: px2rem(28px);
  color: #ffffff;
  img {
    background-color: #ffffff;
    border-radius: px2rem(35px);
    width: px2rem(70px);
    margin-right: px2rem(20px);
  }
}

.fields {
  margin-top: px2rem(25px);
  .field {
    // padding: 0.2rem 0.26667rem 0.2rem 0.26667rem;
    border-bottom: 1px solid #eee;
  }
  .mint-cell-core {
    text-align: right !important;
  }
}
.tips {
  font-size: px2rem(22px);
  color: #838383;
  padding: px2rem(25px) px2rem(25px);
  p {
    line-height: 1.8;
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


