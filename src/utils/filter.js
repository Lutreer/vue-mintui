import Vue from 'vue'
Vue.filter('bankNumbber4', function (value) {
  if (!value) return ''
  var str = value.replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
  return str
})
Vue.filter('cardExpiry', function (value) {
  if (!value || value.length < 4) return 'XX/XX'
  return value.substring(0,2) + '/' + value.substring(2,4)
})
