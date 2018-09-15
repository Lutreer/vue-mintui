<template>
    <div>
        <div class="fields">
          <div class="field">
            <mt-field label="信用卡号" placeholder="请输入还款总金额" disableClear readonly v-model="creditCardNum"></mt-field>
          </div>
          <div class="field">
            <mt-field label="所属银行" readonly disableClear v-model="bankName"></mt-field>
          </div>
        </div>
        <div class="fields date_box">
          <div class="field">
            <mt-cell title="账单日" @click.native="toChooseBillDay" is-link :value="billDay"></mt-cell>
          </div>
          <MonthPicker @dayChange="billDayChange" v-model="showBillDayPicker"></MonthPicker>

          <div class="field">
            <mt-cell title="还款日" @click.native="toChooseRepayDay" is-link :value="repayDay"></mt-cell>
          </div>
          <MonthPicker @dayChange="repayDayChange" v-model="showRepayDayPicker"></MonthPicker>

          <div class="field">
            <mt-field label="账单金额" disableClear placeholder="本期应还金额" v-model="repayMoney"></mt-field>
          </div>
        </div>
        <div class="btns">
            <mt-button size="large" @click="commit">确认并提交</mt-button>
        </div>
        
        
    </div>
</template>
<script>
import Validator from "utils/validator";
import CardService from "../../services/card";
import CONSTS from "config/CONST";
import MonthPicker from "components/date/DayPicker";
export default {
  name: "repay_bill",
  components: {MonthPicker},
  data() {
    return {
      bankName: "",
      creditCardNum: "",
      creditCardId: "",
      repayMoney: null,

      billDay: "",
      repayDay: "",

      billDates: [],
      showBillDayPicker: false,
      repayDates: [],
      showRepayDayPicker: false
    };
  },
  computed: {},
  methods: {
    toChooseBillDay() {
        this.showBillDayPicker = true
    },
    toChooseRepayDay() {
        this.showRepayDayPicker = true
    },
    billDayChange(day){
        this.billDay = day
    },
    repayDayChange(day){
        this.repayDay = day
    },
    commit() {

        if(this.$_.isEmpty(this.billDay + "")){
            this.$toast('请选择账单日')
            return
        }
        if(this.$_.isEmpty(this.repayDay + "")){
            this.$toast('请选择还款日')
            return
        }
        if(this.$_.isEmpty(this.repayMoney + "")){
            this.$toast('请输入还款金额')
            return
        }

      if (Validator.money(this.repayMoney).status) {
        let data = {
          creditcardId: this.creditCardId,
          billDay: this.billDay,
          repaymentDay: this.repayDay,
          billamount: this.repayMoney,
          cardType: 1
        };
        CardService.editCreditcard(data)
          .then(res => {
              this.$router.go(-1);
          })
          .catch(err => {
            this.$toast("添加失败");
          });
      } else {
        this.$toast("输入金额有误");
      }
    },
    toChooseBillDate() {
      this.showChooseBillDate = true;
    },
    toChooseRepayDate() {
      this.showChooseRepayDate = true;
    }
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

    this.repayDay = this.$route.query.repaymentDay;
    this.billDay = this.$route.query.billDay;
    this.repayMoney = this.$route.query.repaymentSum || null;

    for (let i = 1; i <= 31; i++) {
      this.billDates.push({
        name: i,
        mounted: this.chooseBillDate
      });
      this.repayDates.push({
        name: i,
        mounted: this.chooseRepayDate
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.date_box {
  margin-top: px2rem(25px);
}
.fields {
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


