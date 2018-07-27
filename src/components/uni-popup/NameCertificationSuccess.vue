<template>
    <cover :showOut.sync="show" :showClose="false">
        <div class="name_certification_content">
            <div class="tips"></div>
            <mt-button class="btn" size="small" @click="share">分享发红包</mt-button>
        </div>
    </cover>
</template>
<script>
import Cover from "./Cover";
export default {
    name: 'NameCertificationSuccess',
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
      this.$router.push("/sub/certification_idcard");
    },
    share() {
        this.$emit("update:show", false)
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
  background-image: url("../../assets/img/modal-name-certification-success.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;
        display: flex;
    flex-direction: column;
    align-items: center;


  .tips {
    width: 100%;
    margin-top: px2rem(500px);
  }
  .btn {
    margin-top: px2rem(45px);
    height: auto;
    padding: px2rem(15px) px2rem(45px);
    font-size: px2rem(26px);
    background-color: #fec14d;
    color: #ffffff;
    }
}

</style>
