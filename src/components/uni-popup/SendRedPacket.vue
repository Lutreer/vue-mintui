<template>
    <cover :showOut.sync="show">
        <div class="send_red_packet_content">
            
        </div>
    </cover>
</template>
<script>
import Cover from "./Cover";
export default {
  name: "SendRedPacket",
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
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.send_red_packet_content {
  
}
</style>
