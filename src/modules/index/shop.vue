<template>
    <div class="container">
      <div id="map_main"></div>
      <div class="send_red_packet" @click="sendRedPacket">
        <img src="../../assets/img/shop-redpacket.png" alt="">
        发红包
      </div>
    </div>
</template>
<script>
import redPacketImg from "../../assets/img/shop-red-packet.png";
export default {
  name: "index_shop",
  methods: {},
  data() {
    return {
      lng: "",
      lat: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      var map = new AMap.Map("map_main", {
        zoom: 12,
        zooms: [11, 17],
        resizeEnable: true
      });
      var geolocation;
      var facilities = [];
      map.plugin("AMap.Geolocation", function() {
        geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          // zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          buttonPosition: "RB"
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete); //返回定位信息
        AMap.event.addListener(geolocation, "error", onError); //返回定位出错信息
      });
      //解析定位结果
      function onComplete(data) {
        let lng = data.position.getLng();
        let lat = data.position.getLat();

        this.lng = lng;
        this.lat = lat;

        var facilities = [];
        
        for (var i = 0; i < 50; i += 1) {
          let random = Math.round(Math.random() * 100)
          let random1 = Math.round(Math.random() * 100) / 1000 * (Math.random() > 0.5 ? -1 : 1)
          let random2 = Math.round(Math.random() * 100) / 1000 * (Math.random() > 0.5 ? -1 : 1)
          console.log(lng  + "-" + lat + "-" + random1 + "-" + random2)
          console.log([lng + random1, lat + random2])
          var marker = new AMap.ElasticMarker({
            position: [lng + random1 , lat + random2],
            zooms: [11, 17],
            styles: [
              {
                icon: {
                  img: redPacketImg,
                  size: [50 + random, 50 + random], //可见区域的大小
                  ancher:[50 + random/2,50 + random],
                  fitZoom: 16, //最合适的级别
                  scaleFactor: 2, //地图放大一级的缩放比例系数
                  maxScale: 1.8, //最大放大比例
                  minScale: 0.3 //最小放大比例
                }
              }
            ],
            zoomStyleMapping: {
              11: 0,
              12: 0,
              13: 0,
              14: 0,
              15: 0,
              16: 0,
              17: 0
            }
          });
          facilities.push(marker);
        }
        map.add(facilities);
      }
      //解析定位错误信息
      function onError(data) {
      }

      setTimeout(() => {
        this.$loading.close();
      }, 1000);
    });
  },
  methods: {
    sendRedPacket(){
      this.$router.push("/sub/shop_addRedPacket")
    }
  }
};
</script>
<style lang="scss" scoped >
@import "../../assets/css/common.scss";
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-bottom: px2rem(110px);
  overflow: hidden;
  #map_main {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .send_red_packet{
    user-select: none;
    position: fixed;
    background-color: #e66344;
    box-shadow: 0px px2rem(6px) px2rem(15px) rgba(233, 94, 76, 0.5);
    border-radius: px2rem(100px);
    width: px2rem(180px);
    height: px2rem(180px);
    bottom: px2rem(160px);
    left: px2rem(285px);
    color: #F6C8AE;
    display: flex;
    flex-direction: column;
    font-size: px2rem(24px);
    justify-content: center;
    align-items: center;

    img{
      width: px2rem(55px);
      height: px2rem(55px);
      margin-bottom: px2rem(15px);
    }
    &:active{
      background-color: #ca5a41;
    }
  }
}
</style>


