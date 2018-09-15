import axios from 'axios'
import router from '../router'
import CONSTS from '../config/CONST'
import qs from 'qs'
import {
  Toast
} from 'mint-ui'

// 请求拦截器
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers['Content-Type'] = 'multipart/form-data'
// axios.defaults.headers['Content-Type'] = 'application/json'
// axios.defaults.timeout = 15000;
axios.interceptors.request.use(request => {
  // do something before request
  request.data = qs.stringify(request.data)
  request.headers.common[CONSTS.LOCALSTORAGE.ACCESS_TOKEN.toString()] = localStorage.getItem(CONSTS.LOCALSTORAGE.ACCESS_TOKEN) || ''
  return request
}, error => {
  Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  if(response.status === 200 && response.data.msgcode == 102){
    Toast({
      message: response.data.msg,
      duration: 3000
    })
    router.push('/login')
  }
  if (response.status === 200 && response.data.msgcode == 100) {
    return response.data
  } else {
    return Promise.reject(response.data || null)
  }
}, function (error) {
  // Do something with response error
  Toast({
    message: '网络错误',
    duration: 3000
  })
  return Promise.reject(error)
})

export default axios;
