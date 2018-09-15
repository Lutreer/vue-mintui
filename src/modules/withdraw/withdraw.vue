<template>
    <div>
        <div class="bank_box">
            <img :src="'http://' + bankLogo" alt="">
            {{bankName}}  尾号{{creditCardNum | cardNumLast4}}
        </div>
        <div class="repay_amount">
            <div class="title">提现金额</div>
            <div class="amount" @click="editAmount">
                ￥{{withdrawMoney}}
                <img src="../../assets/img/repay-edit.png" alt="">
            </div>
            <div class="footer">
                <img src="../../assets/img/repay-warn.png" alt="">
                最低提现金额350.00元
            </div>
        </div>
        <div class="fields">
            <mt-cell title="提现方式" @click.native="toShowWithdrawWays" is-link :value="withdrawWay"></mt-cell>
            <mt-actionsheet
              cancelText=""
              :actions="withdrawWays"
              v-model="showWithdrawWays">
            </mt-actionsheet>
            <div class="field">
              <mt-field  label="备忘" placeholder="" v-model="remark"></mt-field>
            </div>
        </div>
        <div class="tips">
            <p>温馨提示：</p>
            <p>提现方式是快速提现支持全国大部分银行（浦发银行除外）费率为万65+1，如早9:00--晚12:00使用，15分钟左右到账，其他时间段T+1到账，敬请知悉！</p>
        </div>
        <div class="btns">
            <mt-button size="large" @click="confirm">确认提现</mt-button>
        </div>
    </div>
</template>
<script>
import {  MessageBox } from 'mint-ui'
import Validator from 'utils/validator'
import CardService from '../../services/card'
export default {
  name: "withdraw_withdraw",
  data() {
    return {
      bankName: "",
      creditCardNum: "",
      withdrawWays: [{name: "快速提现", value:"K", method: this.selectedWithdrawWay}, {name: "在线提现", value:"B",method: this.selectedWithdrawWay}],
      withdrawWay: "快速提现",
      withdrawWayValue: "K",
      showWithdrawWays:false,
      withdrawMoney: "0.00",
      bankLogo: "",
      remark: ""
    };
  },
  methods: {
    confirm() {
      if(!Validator.money(this.withdrawMoney).status){
          this.$toast("输入金额有误")
      }

      // if(this.withdrawMoney * 1 < 350){
      //     this.$toast("不得低于350")
      // }
      // TODO channel（1000，1010，1100）,plat（CJ、JC）
      let data = {
        carno: this.creditCardNum,
        channel: 1000,
        plat: "CJ",
        source: this.withdrawWayValue,
        amount: this.withdrawMoney,
        remark: this.remark
      }
      this.$loading.open({
        spinnerType: "triple-bounce"
      });
      CardService.withdraw(data).then(res => {
        this.$toast("提现成功")
        setTimeout(() => {
            this.$router.push('/index')
        }, 500);
      }).catch(err => {
        this.$loading.close()
        this.$toast(err.msg)

      })

    },
    selectedWithdrawWay(way) {
      this.withdrawWay = way.name
      this.withdrawWayValue = way.value
    },
    toShowWithdrawWays(){
      this.showWithdrawWays = true
    },
    editAmount() {
      MessageBox.prompt('请输入提现金额').then(({ value, action }) => {
        if(action === 'confirm'){
          if(Validator.money(value).status){
            this.withdrawMoney = value
          }else{
            this.$toast("输入金额有误")
          }
          
        }
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.$loading.close();
    }, 500);
  },
  created() {
    this.bankName = this.$route.query.bankName;
    this.creditCardNum = this.$route.query.creditCardNum;
    this.bankLogo = this.$route.query.bankLogo;
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.bank_box {
  padding: px2rem(30px) px2rem(10px);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: px2rem(28px);
  img {
    width: px2rem(38px);
    margin-right: px2rem(16px);
  }
}
.repay_amount {
  display: flex;
  flex-direction: column;
  padding: px2rem(25px);
  background-color: #fff;
  margin-top: px2rem(25px);
  .title {
    font-size: px2rem(24px);
  }
  .amount {
    text-align: center;
    font-size: px2rem(44px);
    padding: px2rem(40px) px2rem(10px);
    border-bottom: 1px solid #eee;
    img {
      margin-top: px2rem(-10px);
      width: px2rem(25px);
    }
  }
  .footer {
    display: flex;
    align-items: center;
    font-size: px2rem(24px);
    padding-top: px2rem(20px);
    img {
      margin-right: px2rem(10px);
      width: px2rem(25px);
    }
  }
}
.fields {
  margin-top: px2rem(25px);
  .field{
    // padding: 0.2rem 0.26667rem 0.2rem 0.26667rem;
    border-top: 1px solid #eee;
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


