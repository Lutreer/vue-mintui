mptypty<template>
    <div class="container_empty">
        <p>暂无内容</p>
        <p>EMPTY</p>
    </div>
</template>
<script>
export default {
  name: "Empty",
  methods: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="scss" scope>
@import "../../assets/css/common.scss";
.container_empty {
  width: 100%;
  display: flex;

  color: #ddd;
  flex-direction: column;
  margin-top: px2rem(100px);
  justify-content: center;
  align-items: center;

  p:first-child {
    font-size: px2rem(60px);
    font-weight: 800;
  }
}
</style>


