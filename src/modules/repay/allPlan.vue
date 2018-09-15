<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.container{
    padding: px2rem(25px) px2rem(30px);
    .banner{
        // height: px2rem(200px);
        // border-radius: px2rem(20px);
        // color: #fff;
        // background: linear-gradient(to right, #FCBB64 45%, #FEAE34);
    }
    .plans{
        margin-top: px2rem(40px);
        .plan{
            border-left: 1px solid #dddddd;
            padding-left: px2rem(30px);
            padding-bottom: px2rem(50px);
            position: relative;
            
            .circle{
                position: absolute;
                height: px2rem(30px);
                width: px2rem(30px);
                border-radius: 15px;
                background-color: $baseColor;
                left: px2rem(-15px);
            }
            .plan_month{
                font-size: px2rem(28px);
                color: #3c3c3c;
            }
            .plan_box{
                background-color: #fff;
                
                margin-top: px2rem(15px);
                border-radius: px2rem(8px);
                display: flex;
                flex-direction: column;
                .content{
                    padding: px2rem(36px);
                    display: flex;
                    justify-content: space-between;
                }
                .left{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    color: #c3c3c3;
                    font-size: px2rem(24px);
                    div:first-child{
                        margin-bottom: px2rem(20px);
                    }
                }
                .right{
                    display: flex;
                    align-items: center;
                    text-align: right;
                    color: #3c3c3c;
                }
                .footer{
                    display: flex;
                    justify-content: space-around;
                    margin-top: px2rem(10px);
                    padding: px2rem(15px);
                    border-top: 1px solid #EFEFEF;
                    span{
                        font-size: px2rem(28px);
                        color: $baseColor;
                        flex: 1;
                        text-align: center;
                    }
                    span:first-child{
                        border-right: 1px solid #EFEFEF;
                    }
                }
            }
            
        }
        
    }
    

}
</style>
<template>
    <div class="container">
       <div class="banner">
           <img src="../../assets/img/repay-allplan-banner.png" alt="">
       </div>
       <div class="plans">
           <div class="plan" v-for="(value, key) in plans" :key="key"  v-if="value.length > 0">
               <div class="circle"></div>
               <h2 class="plan_month">{{key | num2zhcn}}月份计划</h2>
               <div class="plan_box" v-for="(p, index) in value" :key="index">
                   <div class="content">
                       <div class="left">
                           <div>{{p.repaymentType}}</div>
                           <div>信用卡还款 尾号({{p.cardNo | cardNumLast4}})</div>
                       </div>
                       <div class="right">￥{{p.repaymentSum | moneyFixed2}}</div>
                   </div>
                   <div class="footer">
                       <span @click="detail(p)">查看详情</span>
                       <span @click="del(p, key, index)">删除计划</span>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
import CardService from "../../services/card"
export default {
  name: "repay_allPlan",
  data() {
    return {
        creditCardId: null,
        plans: []
    }
  },
  methods: {
    detail(plan){
        this.$router.push({
            path: `/sub/repay_planDetail/${plan.repaymentplanId}`,
            query:{
                sum: plan.repaymentSum
            }
        })
    },
    del(plan, month, index){
        this.$loading.open({
            spinnerType: 'triple-bounce'
        })
        CardService.delRepaymentplan(plan.repaymentplanId).then(res => {
            this.$loading.close()
            this.$toast("删除成功")
            this.plans[month].splice(index, 1)
        }).catch(err => {
            this.$loading.close()
            this.$toast(err.msg)
        })
    },
  },
  mounted() {
    this.creditCardId = this.$route.params.creditCardId;
    if(!this.creditCardId) this.$router.go(-1)
    CardService.allPlan(this.creditCardId).then(res => {
        let plans = res.repayments
        let planMap = {}
        for(let i = 0, l = plans.length; i < l; i++) {
            let month = new Date(plans[i].createDate).getMonth() + 1
            planMap[month] ? null : planMap[month] = []
            planMap[month].push(plans[i])
        }
        this.plans = planMap
        this.$loading.close()
    }).catch(err => {
        this.$loading.close()
        this.$toast(err.msg)
    })
    
  }
};
</script>



