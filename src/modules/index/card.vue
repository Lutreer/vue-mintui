<template>
    <div>
      <Developing></Developing>
    </div>
</template>
<script>
import Developing from '../../components/error/Developing.vue'
export default {
  name:'index_card',
  methods: {
  },
  components: {Developing},
  data() {
    return {
    };
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
    @import "../../assets/css/common.scss";
    .fonts{
        border-top: px2rem(1px) solid black;
        padding: px2rem(75px);
        background-color: red;
        font-size: px2rem(32px);
    }
</style>


