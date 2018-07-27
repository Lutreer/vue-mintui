<template>
    <div>
        <div class="warn_infon">
            <img src="../../assets/img/common/warn.png" alt="">
            请绑定持卡人本人的银行卡。
        </div>
        <div class="fields">
            <div class="field">
                <mt-field label="真实姓名" placeholder="请输入本人真实姓名"></mt-field>
            </div>
            <div class="field" style="display:flex;justify-content: space-between;align-items: center;">
                <mt-field style="flex:1;" label="储蓄卡卡号" placeholder="请输入本人储蓄卡号"></mt-field>
                <img src="../../assets/img/common/camera.png" height="18px" width="22px">
            </div>
            <div class="field">
                <mt-field label="预留手机号" placeholder="请输入银行卡预留手机号"></mt-field>
            </div>
            <div class="field" style="border-bottom:0px;display:flex;justify-content: space-between;align-items: center;">
                <mt-field style="flex:1;" label="手机验证码" placeholder="请输入短信验证码"></mt-field>
                <mt-button class="short_message_btn" size="small">获取</mt-button>
            </div>
        </div>
        <div class="normal_infon">
            注：信息仅用于身份验证，XXXXXX保障您的信息安全。
        </div>

        <div class="btns">
            <mt-button size="large" @click="submit">提交</mt-button>
        </div>
        
    </div>
</template>
<script>
import CONST from '../../config/CONST'
export default {
    name: 'certification_savingscard',
  data() {
    return {
      aa: 234
    };
  },
  methods: {
      submit() {
          window.localStorage.setItem(CONST.LOCALSCORAGE.CERTIFICATION_SUCCESS, CONST.LOCALSCORAGE.CERTIFICATION_SUCCESS)
          this.$router.push("/sub/certification/savingscard")
          
      }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$loading.close();
        this.show = true;
      }, 1000);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/fun.scss";
.idcards {
  display: flex;
  justify-content: space-around;
  padding: px2rem(30px);
  background-color: #ffffff;
  .idcard {
    width: px2rem(300px);
  }
}
.warn_infon {
  display: flex;
  font-size: px2rem(22px);
  color: #999;
  padding: px2rem(10px) px2rem(36px);
  img {
    width: px2rem(30px);
    height: px2rem(30px);
    margin-right: px2rem(10px);
  }
}
.fields{
    background-color: #ffffff;
    text-align: left;
    .field{
        padding: px2rem(15px) px2rem(20px) px2rem(15px) px2rem(20px);
        border-bottom:1px solid #eee;
        .short_message_btn{
            background-color: #fec14d;
            color: #ffffff;
        }
    }
  
}
.normal_infon {
  display: flex;
  font-size: px2rem(22px);
  color: #999;
  padding: px2rem(10px) px2rem(36px);
  margin-top: px2rem(10px);
  img {
    width: px2rem(28px);
    height: px2rem(32px);
    margin-right: px2rem(10px);
  }
}
.btns{
    padding: 0 px2rem(38px);
    margin-top: px2rem(50px);
    button{
        background-color: #fec14d;
        color: #ffffff;

    }
}
</style>
