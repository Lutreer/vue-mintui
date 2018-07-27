<template>
  <div id="app">
    
    <div class="container">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
    }
  }
};
</script>

<style lang="scss">
@import "../static/css/reset.css";
html, body{
  height: 100%;
  background-color: #f5f5f5;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  font-size: 18px;
  height: 100%;
}
.container{
  // margin-top: 40px;
  height: 100%;
  .mint-cell-wrapper, .mint-cell{
    background-size: 0 !important;
  }
  input::-webkit-input-placeholder {
  color:#c3c3c3 !important;
  font-size: 0.37rem !important;
  }
  .mint-cell-text{
    color: #3c3c3c;
  }
}
</style>
