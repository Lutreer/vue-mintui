import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import _ from 'lodash'
import './utils/filter'


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


import * as TYPES from './store/mutation-type'
router.beforeEach((to, from, next) => {
  Indicator.open({
    spinnerType: 'triple-bounce'
  })
  let header = {
    title: to.meta.title,
    color: to.meta.header && to.meta.header.color,
    backgroundColor: to.meta.header && to.meta.header.backgroundColor,
    rightContent: to.meta.header && to.meta.header.rightContent,
    jointMode: to.meta.header && to.meta.header.jointMode,
    display: to.meta.header && to.meta.header.display
  }
  console.log(store)
  store.commit(TYPES.COMMON.SET_HEADER, header)
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})


