<template>
    <div class="container">
      <div class="card">
          <div class="bank_name">
            <!-- <div class="select_bank">请选择发卡行/卡类型 ></div> -->
            <!-- <div class="selected">
              <img src="" alt="">农业银行卡信用卡
            </div> -->
          </div>
          <div class="bank_num">{{cardNum | bankNumbber4}}</div>
          <div class="bank_name_data">
            <div class="user_name">持卡人：{{userName}}</div>
            <div class="user_data">有效期：xx/xx</div>
          </div>
      </div>
      <div class="input_content">
        <p>补全卡号</p>
        <div class="field">
          <mt-field placeholder="请输入银行卡号" :attr="{maxlength:19}" v-model="cardNum">
            <!-- <img src="../../assets/img/common/camera.png" height="18px" width="22px"> -->
          </mt-field>
        </div>
        
      </div>


      <div class="next" @click="next">下一步</div>
    </div>
    
</template>
<script>
import Validator from 'utils/validator'
export default {
  name: "certification_checkFound-card",
  data() {
    return {
      userName: this.$getUserInfo().userName,
      cardNum: ''
    };
  },
  computed: {},
  methods: {
    next(){
      if(Validator.bankNum(this.cardNum).status){
        this.$router.push(`/sub/certification_checkFound-date/${this.cardNum}`)
      }else {
        this.$toast("请输入正确的卡号")
      }
      
    }
  },
  mounted() {
    this.$loading.close();
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card {
    padding: px2rem(10px) px2rem(35px);
    width: px2rem(680px);
    height: px2rem(370px);
    border-radius: px2rem(15px);
    margin-top: px2rem(30px);
    margin-bottom: px2rem(30px);
    background: linear-gradient(rgb(253, 191, 91), #fe9539);
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    box-shadow: px2rem(2px) px2rem(4px) px2rem(6px) #c9b38e;
    .bank_name {
      color: #fff6e5;
      font-size: px2rem(28px);
      .select_bank {
      }
    }
    .bank_num {
      color: #fff;
      font-size: px2rem(44px);
      text-align: center;
      font-weight: 800;
      height: px2rem(60px);
    }
    .bank_name_data {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: #fed2a3;
      font-size: px2rem(28px);
      .user_name {
      }
      .user_data {
      }
    }
  }
  .input_content {
    width: 100%;
    align-self: flex-start;
    p{
      color: #fed2a3;
      font-size: px2rem(28px);
      margin-left: px2rem(40px);
    }
    .field{
      padding: px2rem(15px) px2rem(20px) px2rem(15px) px2rem(20px);
      border-bottom: 1px solid #eee;
    }
  }

  .next{
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0px;
    color: #fff;
    height: px2rem(80px);
    line-height: px2rem(80px);
    background-color: $baseColor;
  }
}
</style>
