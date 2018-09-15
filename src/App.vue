<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import UserService from "./services/user";
import CONSTS from "./config/CONST";
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    
  }
};
</script>

<style lang="scss">
@import "../static/css/reset.css";
html,
body {
  height: 100%;
  background-color: #f5f5f5;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  font-size: 18px;

  .mint-cell-wrapper,
  .mint-cell {
    background-size: 0 !important;
  }
  input::-webkit-input-placeholder {
    color: #c3c3c3 !important;
    font-size: 0.37rem !important;
  }
  .mint-cell-text {
    color: #3c3c3c;
  }
}
.container {
  // margin-top: 40px;
  height: 100%;
  .mint-cell-wrapper,
  .mint-cell {
    background-size: 0 !important;
  }
  input::-webkit-input-placeholder {
    color: #c3c3c3 !important;
    font-size: 0.37rem !important;
  }
  .mint-cell-text {
    color: #3c3c3c;
  }
}
</style>
