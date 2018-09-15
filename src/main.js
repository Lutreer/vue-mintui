import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import _ from 'lodash'
import CONSTS from './config/CONST'
import './utils/filter'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


import 'static/js/flexible.js'
import Mint from 'mint-ui'
import {
  Indicator,
  Toast
} from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style.css'

Vue.prototype.$loading = Indicator
Vue.prototype.$toast = Toast
Vue.prototype.$http = axios
Vue.prototype.$_ = _
Vue.prototype.$CONSTS = CONSTS
Vue.prototype.$getUserInfo = function(){
  return JSON.parse(localStorage.getItem(CONSTS.LOCALSTORAGE.USER_INFO) || {})
}


import * as TYPES from './store/mutation-type'
router.beforeEach((to, from, next) => {
  Indicator.open({
    spinnerType: 'triple-bounce'
  })
  next()
})
router.afterEach((to, from) => {
  let header = {
    title: to.meta.title,
    color: to.meta.header && to.meta.header.color,
    borderBottom: to.meta.header && to.meta.header.borderBottom,
    backgroundColor: to.meta.header && to.meta.header.backgroundColor,
    rightContent: to.meta.header && to.meta.header.rightContent,
    jointMode: to.meta.header && to.meta.header.jointMode,
    display: to.meta.header && to.meta.header.display
  }
  store.commit(TYPES.COMMON.SET_HEADER, header)
  if(to.meta.tab){
    store.commit(TYPES.COMMON.SET_TAB, to.meta.tab)
  }
})

// 微信相关
// wx.config({
//   debug: true, 
//   jsApiList: []
// });
// window.wxjs_is_wkwebview = true
// wx.hideAllNonBaseMenuItem();

// 微信相关 end

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})


