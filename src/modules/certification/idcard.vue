<template>
    <div>
        <div class="idcards">
            <div class="idcard">
                <img src="../../assets/img/idcard-1.png" alt="">
            </div>
            <div class="idcard">
                <img src="../../assets/img/idcard-2.png" alt="">
            </div>
        </div>
        <div class="warn_infon">
            <img src="../../assets/img/common/warn.png" alt="">
            请填写您的真实身份信息，以便审核的快速通过。
        </div>
        <div class="fields">
            <div class="field">
                <mt-field label="真实姓名" placeholder="请输入本人真实姓名"></mt-field>
            </div>
            <div class="field" style="border-bottom:0px">
                <mt-field label="身份证号码" placeholder="请输入本人真实身份证号" type="number" :attr="{maxlength:18}"></mt-field>
            </div>
        </div>
        <div class="normal_infon">
            <img src="../../assets/img/idcard-shield.png" alt="">
            信息仅用于身份验证，XXXXXX保障您的信息安全。
        </div>

        <div class="btns">
            <mt-button size="large" @click="nextStep">下一步</mt-button>
        </div>
        
    </div>
</template>
<script>
export default {
  name: "certification_idcard",
  data() {
    return {

    }
  },
  methods: {
    nextStep() {
      this.$router.push("/sub/certification_savingscard");
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
.fields {
  background-color: #ffffff;
  text-align: left;
  .field {
    padding: px2rem(15px) px2rem(20px) px2rem(15px) px2rem(20px);
    border-bottom: 1px solid #eee;
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
.btns {
  padding: 0 px2rem(38px);
  margin-top: px2rem(50px);
  button {
    background-color: #fec14d;
    color: #ffffff;
  }
}
</style>
