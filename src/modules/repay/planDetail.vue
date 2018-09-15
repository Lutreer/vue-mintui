<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.container {
  .header {
      background-image: url("../../assets/img/repay-allplan-bg.png");
      background-size: 100% auto;
      background-repeat: no-repeat;
      height: px2rem(470px);
      padding-top: px2rem(40px);
      display: flex;
      flex-direction: column;
      color: #fff;
      justify-content: center;
      align-items: center;
    .repay_money {
        font-size: px2rem(60px);
    }
    .repay_text {
        font-size: px2rem(28px);
    }
  }
  .slide-list-enter{
  opacity: 0;
  transform: translateX(-30px);
}
.slide-list-enter-active {
  transition: all .5s ease;
}
}
</style>
<template>
    <div class="container">
       <div class="header">
           <div class="repay_money">￥{{sum | moneyFixed2}}</div>
           <div class="repay_text">计划还款额度</div>
       </div>
       <div class="plans">
         <transition-group name="slide-list">
           <Bill :plan="plan" v-for="(plan, index) in detailList" :key="index"></Bill>
         </transition-group>
       </div>
    </div>
</template>
<script>
import Bill from '../../components/card/Bill.vue'
import CardService from '../../services/card'
export default {
  name: "repay_planDetail",
  data() {
    return {
      planId: "",
      sum: "",
      detailList: []
    };
  },
  components:{Bill},
  methods: {
  
  },
  mounted() {
    this.planId = this.$route.params.planId;
    this.sum = this.$route.query.sum;
    CardService.planDetail(this.planId).then(res => {
      this.detailList = res.repayments
      this.$loading.close();
    }).catch(err => {
      this.$loading.close();
      this.$toast(err.msg)
    })
  }
};
</script>



