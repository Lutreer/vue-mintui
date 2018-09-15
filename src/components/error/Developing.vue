<template>
    <div class="container_developing">
        <p>开发中</p>
        <p>DEVELOPING</p>
    </div>
</template>
<script>
export default {
  name: "Developing",
  methods: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="scss" scope>
@import "../../assets/css/common.scss";
.container_developing {
  width: 100%;
  display: flex;

  color: #ddd;
  flex-direction: column;
  margin-top: px2rem(100px);
  justify-content: center;
  align-items: center;

  p:first-child {
    font-size: px2rem(100px);
    font-weight: 800;
  }
}
</style>


