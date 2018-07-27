<template>
    <div>
        <div class="bank_box">
            <img src="../../assets/img/home-citic-logo.png" alt="">
            招商银行  尾号2648
        </div>
        <div class="repay_amount">
            <div class="title">收款金额</div>
            <div class="amount">
                ￥5000.00
                <img src="../../assets/img/repay-edit.png" alt="">
            </div>
            <div class="footer">
                <img src="../../assets/img/repay-warn.png" alt="">
                最低收款金额
            </div>
        </div>
        <div class="fields">
            <mt-cell title="收款方式" is-link></mt-cell>
            <mt-field label="备忘" placeholder=""></mt-field>
        </div>
        <div class="tips">
            <p>温馨提示：</p>
            <p>收款方式是快速收款支持全国大部分银行（浦发银行除外）费率为万65+1，如早9:00--晚12:00使用，15分钟左右到账，其他时间段T+1到账，敬请知悉！</p>
        </div>
        <div class="btns">
            <mt-button size="large" @click="confirm">确认收款</mt-button>
        </div>
    </div>
</template>
<script>
export default {
  name: "repay_repay",
  data() {
    return {}
  },
  methods: {
    confirm() {}
  },
  mounted() {
    this.$route.params.cardId
    setTimeout(() => {
      this.$loading.close()
    }, 3000)
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/fun.scss";
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
    background-color: #fec14d;
    color: #ffffff;
  }
}
</style>


