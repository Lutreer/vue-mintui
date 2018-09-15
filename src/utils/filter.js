import Vue from 'vue'
import moment from 'moment'
import CONSTS from '../config/CONST'

Vue.filter('bankNumbber4', function (value) {
  if (!value) return ''
  var str = value.replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
  return str
})
Vue.filter('cardExpiry', function (value) {
  if (!value || value.length < 4) return 'XX/XX'
  return value.substring(0, 2) + '/' + value.substring(2, 4)
})
Vue.filter('cardNumLast4', function (value) {
  if (!value || value.length < 16) return ''
  return value.substr(12)
})

Vue.filter('moneyFixed2', function (value) {
  if (value === '' || value === null || value === undefined || isNaN(value)) return value
  return Number(value).toFixed(2)
})

Vue.filter('num2zhcn', function (value) {
  if (value === '' || value === null || value === undefined || isNaN(value)) return value

  var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  var chnUnitSection = ["", "万", "亿", "万亿", "亿亿"];
  var chnUnitChar = ["", "十", "百", "千"];

  var strIns = '',
    chnStr = '';
  var unitPos = 0;
  var zero = true;
  while (value > 0) {
    var v = value % 10;
    if (v === 0) {
      if (!zero) {
        zero = true;
        chnStr = chnNumChar[v] + chnStr;
      }
    } else {
      zero = false;
      strIns = chnNumChar[v];
      strIns += chnUnitChar[unitPos];
      chnStr = strIns + chnStr;
    }
    unitPos++;
    value = Math.floor(value / 10);
  }
  return chnStr;
})

Vue.filter('dateFormat', function (value, format) {
  try {
    let date = new Date(value)
    return moment(date).format(format)
  } catch (e) {
    return value
  }
})
Vue.filter('planStatus', function (value) {
  let description = ""
  switch (value) {
    case CONSTS.PLAN_STATUS.UNDO.CODE:
      description = CONSTS.PLAN_STATUS.UNDO.DES
      break
    case CONSTS.PLAN_STATUS.DONE_SUCCESS.CODE:
      description = CONSTS.PLAN_STATUS.DONE_SUCCESS.DES
      break
    case CONSTS.PLAN_STATUS.FAIL.CODE:
      description = CONSTS.PLAN_STATUS.FAIL.DES
      break
    default: 
      description = "执行中"
      break
  }
  return description
})
