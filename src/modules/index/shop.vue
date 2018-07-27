<template>
    <div>
      shop
    </div>
</template>
<script>
export default {
  name:'index_shop',
  methods: {
  },
  data() {
    return {
    }
  },
  mounted(){

    this.$nextTick(() => {
      setTimeout(() => {
        this.$loading.close()
      }, 1000)
      
    })
  }
};
</script>
<style lang="scss" scope>
    @import "../../assets/css/fun.scss";
    .fonts{
        border-top: px2rem(1px) solid black;
        padding: px2rem(75px);
        background-color: red;
        font-size: px2rem(32px);
    }
</style>


