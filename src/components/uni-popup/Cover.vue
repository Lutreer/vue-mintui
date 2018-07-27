<template>
    <div class="uni_popup_box" v-if="showOut">
        <div class="uni_popup_slot">
            <slot></slot>
            <img  @click="close" v-if="showClose" class="close" src="../../assets/img/common/close.png" alt="">
        </div>
        
        <div :class="['uni_popup', modal ? 'uni_popup_cover' : '']"></div>
    </div>
</template>
<script>
export default {
  name: "Cover",
  props: {
    modal: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showOut: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    close() {
        this.$emit("update:showOut", false)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/fun.scss";
.uni_popup_box {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 9001;
  .uni_popup_slot {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 9002;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .close {
      margin-top: px2rem(80px);
      width: px2rem(65px);
    }
  }
  .uni_popup_cover {
    background-color: black;
    opacity: 0.7;
  }
  .uni_popup {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 9000;
  }
}
</style>
