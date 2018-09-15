<template>
    <div class="bill" @click="detail(plan)">
        <div class="left" v-if="plan.source">
            <img src="../../assets/img/repay-collection.png" alt="" class="plan_type">
            <div class="bank_info">
            <div class="bank_num">提现</div>
            <div class="bank_rate">[费率{{plan.rate * 100}}%]</div>
            <div class="date">{{plan.payTime}}</div>
            </div>
        </div>
        <div v-else class="left">
            <img src="../../assets/img/repay-consume.png" alt="" class="plan_type">
            <div class="bank_info">
            <div class="bank_num">{{plan.type == "0" ? "还款" : "消费"}}计划</div>
            <div class="bank_rate">[费率{{plan.rate * 100}}%]</div>
            <div class="date">{{plan.repaymentTime || plan.repaymentDay}}</div>
            </div>
        </div>
        <div class="right" v-if="plan.source">
            <div class="amount">-{{plan.amount | moneyFixed2}}</div>
            <div class="succsss">交易成功</div>
        </div>
        <div class="right" v-else>
            <div class="amount">{{plan.type == "0" ? "+" : "-"}}{{plan.repaymentRealSum | moneyFixed2}}</div>
            <div class="succsss">{{plan.status | planStatus}}</div>
        </div>
    </div>
</template>
<script>
import CONSTS from '../../config/CONST'
export default {
  name: "Bill",
  data() {
    return {
      
    }
  },
  props:{
    plan: Object
  },
  methods: {
    detail(plan){
      console.log(plan)
      // 有source字段时表示是信用卡提现，否则是计划相关(type:0->计划还款；type:1->计划消费）
      let id = plan.source ? plan.requestId : plan.repaymentId
      let type = plan.source ? CONSTS.BILL_TYPE.CREDIT_WITHDRAW : (plan.type == 0 ? CONSTS.BILL_TYPE.PLAN_REPAY : CONSTS.BILL_TYPE.PLAN_CONSUME)
      this.$router.push(`/sub/repay_transactionDetail/${id}/${type}`)
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.bill {
      display: flex;
      justify-content: space-between;
      padding: px2rem(25px) px2rem(25px);
      background-color: white;
      border-bottom: 1px solid #f5f5f5;
      .left {
        display: flex;
        align-items: center;
        .plan_type {
          width: px2rem(90px);
          margin-right: px2rem(20px);
        }

        .bank_info {
          .bank_num {
            font-size: px2rem(28px);
            color: #3c3c3c;
          }
          .bank_rate {
            font-size: px2rem(24px);
            color: #c3c3c3;
            padding: px2rem(10px) 0;
          }
          .date {
            font-size: px2rem(24px);
            color: #c3c3c3;
          }
        }

        
      }
      .right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: right;
          .amount {
            font-size: px2rem(32px);
            color: $baseColor;
          }
          .succsss {
            font-size: px2rem(24px);
            color: #c3c3c3;
          }
        }
    }
</style>
