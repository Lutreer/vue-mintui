<template>
    <cover :showOut.sync="show">
        <div class="name_certification_content">
            <div class="tips">
                <div class="title">实名认证</div>
                <div class="content">保障资金安全，更有奖励金、现金券、代金券免费领取</div>
                <div class="btn" @click="goCertification">立即认证</div>
            </div>
        </div>
    </cover>
</template>
<script>
import Cover from "./Cover";
export default {
  name: "NameCertification",
  components: {
    Cover
  },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    goCertification() {
      this.$emit("update:show", false);
      this.$router.push("/sub/certification_idcard");
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/fun.scss";
.name_certification_content {
  width: px2rem(475px);
  height: px2rem(680px);
  background-image: url("../../assets/img/modal-name-certification.png");
  background-size: 100% auto;
  background-color: #fff;
  background-repeat: no-repeat;

  .tips {
    padding-top: px2rem(28px);
    width: 100%;
    height: 45%;
    margin-top: px2rem(370px);
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: px2rem(36px);
      color: #3c3c3c;
    }
    .content {
      padding: 0 px2rem(50px);
      text-align: left;
      margin: px2rem(10px) px2rem(0px) px2rem(40px) px2rem(0px);
      font-size: px2rem(24px);
      color: #999999;
    }
    .btn {
      width: 45%;
      padding: px2rem(15px) 0;
      font-size: px2rem(26px);
      border-radius: px2rem(40px);
      background-color: #fec14d;
      color: #ffffff;
      box-shadow: 0px px2rem(4px) px2rem(4px) #ffe0ab;
      text-align: center;
    }
  }
}
</style>
