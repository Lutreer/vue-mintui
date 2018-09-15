<template>
    <div>
        <div class="bank_box">
          <div class="name_refrash">
            <div class="name">
              <img :src="'http://' + bankLogo" alt="">
              <div>{{bankName}} 尾号({{creditCardNum | cardNumLast4}})</div>
            </div>
            
            <div class="refrash"><img src="../../assets/img/common/refresh.png" alt="">更新账单</div>
          </div>
          <div class="bill_money">
            <div class="bill_info">
              <div v-if="day > repaymentDay">已出账单</div>
              <div v-else>未出账单</div>
              <div>最后还款日{{month}}/{{repaymentDay}}</div>
            </div>
            <div class="money"><span>￥</span>{{repaymentSum | moneyFixed2}}</div>
          </div>
        </div>
        <div class="btn_box">
            <div @click="edit">编辑</div>
            <div @click="repay">智能还款</div>
            <div @click="allPlan">全部计划</div>
        </div>

        <div class="bill_box">
            <div class="option_box">
              <div class="selected">
                <!-- 筛选
                <img src="../../assets/img/common/drop.png" alt="" class="drop"> -->
              </div>
              <div class="date_box">
                {{options.year}}/{{options.month}}
                <img @click="changeDate" src="../../assets/img/common/date.png" alt="" class="date">
              </div>
            </div>
            <div class="bill_list">
              <transition-group name="slide-list">
                <Bill :plan="deal" v-for="(deal,index) in dealList" :key="index"></Bill>
              </transition-group>
            </div>
        </div>
        <Empty v-if="dealList.length == 0"></Empty>
        <MonthPicker @monthChange="monthChange" v-model="showMonthPicker"></MonthPicker>
    </div>
</template>
<script>
import MonthPicker from "../../components/date/MonthPicker.vue";
import Empty from "../../components/error/Empty.vue";
import Bill from "../../components/card/Bill.vue";
import CardService from "../../services/card";
import Validator from "../../utils/validator";
export default {
  name: "repay_bill",
  data() {
    return {
      month: "",
      day: "",
      bankName: "",
      bankLogo: "",
      creditCardNum: "",
      creditCardId: "",

      billDay: "",
      repaymentDay: "",
      repaymentSum: 0,

      showMonthPicker: false,

      options: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1
      },
      dealList: []
    };
  },
  components: { MonthPicker, Bill, Empty},
  methods: {
    monthChange(dateArr) {
      if (dateArr[0] != this.options.year || dateArr[1] != this.options.month) {
        this.options.year = dateArr[0];
        this.options.month = dateArr[1];
        this._getBillsByData(this.options);
      }
    },
    changeDate() {
      this.showMonthPicker = true;
    },
    _getBillsByData({ id, month }, loading = true) {
      if (loading) this.$loading.open({ spinnerType: "triple-bounce" });
      let params = {
        cardId: this.creditCardId,
        month:
          this.options.year +
          "-" +
          (this.options.month < 10
            ? "0" + this.options.month
            : this.options.month)
      };
      CardService.getDealList(params)
        .then(res => {
          this.dealList = this.$_.orderBy(
            [...res.object[0], ...res.object[1]],
            ["repaymentDay", "createDate"],
            ["desc", "desc"]
          );
          this.$loading.close();
        })
        .catch(err => {
          this.$toast("请求失败");
          this.$loading.close();
        });
    },

    edit() {
      this.$router.push({
        path: "/sub/repay_bill",
        query: {
          bankName: this.bankName,
          creditCardNum: this.creditCardNum,
          creditCardId: this.creditCardId,
          billDay: this.billDay,
          repaymentDay: this.repaymentDay,
          repaymentSum: Validator.money(this.repaymentSum).status
            ? this.repaymentSum
            : null
        }
      });
    },
    repay() {
      this.$router.push({
        path: "/sub/repay_addPlan",
        query: {
          bankName: this.bankName,
          creditCardNum: this.creditCardNum,
          creditCardId: this.creditCardId,

          repaymentDay: this.repaymentDay,
          billDay: this.billDay,
          repaymentSum: this.repaymentSum,
          bankLogo: this.bankLogo
        }
      });
    },
    allPlan() {
      this.$router.push(`/sub/repay_allPlan/${this.creditCardId}`);
    }
  },
  created() {
    let month = new Date().getMonth() + 1;
    this.month = month.length > 1 ? month : "0" + month;
    this.day = new Date().getDate();
  },
  mounted() {
    this.creditCardId = this.$route.params.creditCardId;
    this._getBillsByData(
      { id: this.$route.params.creditCardId, month: this.month },
      false
    );
    CardService.getCreditcardDetail(this.$route.params.creditCardId)
      .then(res => {
        this.bankName = res.creditcard.bank;
        this.creditCardNum = res.creditcard.creditcard;
        this.creditCardId = res.creditcard.creditcardId;
        this.repaymentDay = res.creditcard.repaymentDay;
        this.billDay = res.creditcard.billDay;
        this.repaymentSum = res.creditcard.billamount || "xxx.xx";
        this.bankLogo = res.logoUrl;
        this.$loading.close();
      })
      .catch(err => {
        this.$toast("请求失败");
        this.$loading.close();
      });
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.slide-list-enter{
  opacity: 0;
  transform: translateX(-30px);
}
.slide-list-enter-active {
  transition: all .5s ease;
}
.bank_box {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: px2rem(32px) px2rem(34px);
  .name_refrash {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .name {
      display: flex;
      align-items: center;
      font-size: px2rem(28px);
      img {
        width: px2rem(42px);
        margin-right: px2rem(15px);
      }
    }
    .refrash {
      display: flex;
      align-items: center;
      font-size: px2rem(24px);
      img {
        width: px2rem(26px);
        margin-right: px2rem(10px);
      }
    }
  }
  .bill_money {
    display: flex;
    margin-top: px2rem(40px);
    margin-bottom: px2rem(60px);
    border-bottom: 1px#c3c3c3;
    justify-content: space-between;

    .bill_info {
      div:first-child {
        font-size: px2rem(36px);
        color: #3c3c3c;
      }
      div:last-child {
        font-size: px2rem(24px);
        color: #c3c3c3;
      }
    }
    .money {
      font-size: px2rem(44px);
      display: flex;
      align-items: center;
      span {
        font-size: px2rem(24px);
      }
    }
  }
}

.btn_box {
  display: flex;
  color: $baseColor;
  background-color: #ffffff;
  padding: px2rem(20px);
  margin-top: 1px;
  div {
    flex: 1;
    text-align: center;
    font-size: px2rem(28px);

    &:active {
      color: #d09a34;
    }
  }
  div:first-child {
    border-right: 1px solid #f5f5f5;
  }
  div:last-child {
    border-left: 1px solid #f5f5f5;
  }
}

.bill_box {
  margin-top: px2rem(30px);
  background-color: #fff;
  .option_box {
    display: flex;
    justify-content: space-between;
    padding: px2rem(20px) px2rem(30px);
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
    .selected {
      display: flex;
      align-items: center;
      font-size: px2rem(24px);

      .drop {
        width: px2rem(16px);
        margin-left: px2rem(8px);
      }
    }
    .date_box {
      display: flex;
      align-items: center;
      font-size: px2rem(26px);
      color: #3c3c3c;
      .date {
        margin-left: px2rem(10px);
        width: px2rem(30px);
      }
    }
  }
  .bill_list {
    margin-top: 1px;
  }
}
</style>


