<template>
    <div class="sub_container">
        <mt-header :title="header.title" fixed :style="{borderBottom: header.borderBottom || 'none', backgroundColor: header.backgroundColor || '#fff', color: header.color || 'black'}">
            <mt-button icon="back" slot="left" @click="goBack"></mt-button>
            <!-- <mt-button slot="right">分享</mt-button> -->
        </mt-header>
        <div :class="['sub_content', header.jointMode || 'conjoint']">
            <router-view></router-view>
        </div>

    </div>
    
</template>
<script>
import { mapState } from "vuex"
export default {
//   name: "sub",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      header: "header"
    })
  },
  methods: {
      goBack() {
        this.$router.go(-1)
      }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../assets/css/common.scss";
.sub_container {
    height: 100%;
  .sub_content {
      height: 100%;
    overflow-x: hidden;
  }
  .conjoint {
    padding-top: 40px;
  }
  .cover {
    padding-top: 0;
  }
}
</style>
