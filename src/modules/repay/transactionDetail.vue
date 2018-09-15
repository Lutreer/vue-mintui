<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.container {
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: px2rem(30px) px2rem(40px);
  display: flex;
  flex-direction: column;
  align-items: center;

  .payee {
    font-size: px2rem(24px);
    color: #3c3c3c;
  }

  .money {
    font-size: px2rem(72px);
    color: #3c3c3c;
    padding: px2rem(60px) 0 px2rem(20px) 0;
    .rmb_symbol {
      font-size: px2rem(32px);
    }
  }
  .success {
    font-size: px2rem(28px);
    color: #c3c3c3;
  }

  .detail {
    display: flex;
    justify-content: center;
    width: 100%;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    margin-top: px2rem(60px);

    .detail_item {
      width: 100%;
      padding: px2rem(20px) 0;
      div {
        width: 100%;
        padding: px2rem(5px) 0;
        font-size: px2rem(24px);

        .title {
          display: inline-block;
          width: 42%;
          text-align: right;
        }
      }
      .content {
        padding-left: px2rem(30px);
      }
    }
  }
  .to_shop {
    width: 50%;
    margin-top: px2rem(50px);
    background-color: $baseColor;
    color: #fff;
  }
}
</style>
<template>
    <div class="container">
       <p class="payee">{{detail.payType}}-河南省广之睿商务科技有限公司</p>
       <div class="money">
           <span class="rmb_symbol">￥</span>{{detail.paySum | moneyFixed2}}
       </div>
       <p class="success">{{detail.status | planStatus}}</p>

       <div class="detail">
           <div class="detail_item">
               <div><span class="title">交易类型：</span><span class="content">{{detail.payType}}</span></div>
               <div><span class="title">交易卡号：</span><span class="content">{{detail.cardNo}}</span></div>
               <div><span class="title">到账金额：</span><span class="content">￥{{detail.realSum  | moneyFixed2}}</span></div>
               <div><span class="title">手续费：</span><span class="content">￥{{detail.businessSum  | moneyFixed2}}</span></div>
               <div><span class="title">交易时间：</span><span class="content">{{detail.payTime}}</span></div>
           </div>
       </div>

       <mt-button size="large" class="to_shop">查看商铺</mt-button>
    </div>
</template>
<script>
import CardService from "../../services/card";
export default {
  name: "repay_transactionDetail",
  data() {
    return {
      billId: "",
      billType: "",
      detail: {}
    };
  },
  methods: {},
  mounted() {
    let billId = this.$route.params.billId;
    let billType = this.$route.params.billType;
    CardService.payRecordDetail({payRecordId: billId, payType: billType})
      .then(res => {
        this.detail = res.payrecord
        this.$loading.close();
      })
      .catch(err => {
        this.$loading.close();
        this.$toast(err.msg)
      });
  }
};
</script>



