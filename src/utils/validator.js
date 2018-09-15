export default {
  idcard(id) {
    // 1 "验证通过!", 0 //校验不通过
    var format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
    //号码规则校验
    if (!format.test(id)) {
      return {
        'status': false,
        'msg': '身份证号码不合规'
      };
    }
    //区位码校验
    //出生年月日校验   前正则限制起始年份为1900;
    var year = id.substr(6, 4), //身份证年
      month = id.substr(10, 2), //身份证月
      date = id.substr(12, 2), //身份证日
      time = Date.parse(month + '-' + date + '-' + year), //身份证日期时间戳date
      now_time = Date.parse(new Date()), //当前时间戳
      dates = (new Date(year, month, 0)).getDate(); //身份证当月天数
    if (time > now_time || date > dates) {
      return {
        'status': false,
        'msg': '出生日期不合规'
      }
    }
    //校验码判断
    var c = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //系数
    var b = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); //校验码对照表
    var id_array = id.split("");
    var sum = 0;
    for (var k = 0; k < 17; k++) {
      sum += parseInt(id_array[k]) * parseInt(c[k]);
    }
    if (id_array[17].toUpperCase() != b[sum % 11].toUpperCase()) {
      return {
        'status': false,
        'msg': '身份证校验码不合规'
      }
    }
    return {
      'status': true,
      'msg': '校验通过'
    }
  },
  bankNum(bankNum) {
    var bankNum = bankNum.replace(/\s/g, '');
    if (bankNum == "") {
      return {
        'status': false,
        'msg': '银行卡号不能为空'
      }
    }
    if (bankNum.length < 16 || bankNum.length > 19) {
      return {
        'status': false,
        'msg': '银行卡号长度必须在16到19之间'
      }
    }
    var num = /^\d*$/; //全数字
    if (!num.exec(bankNum)) {
      return {
        'status': false,
        'msg': '银行卡号必须全为数字'
      }
    }
    // //开头6位
    // var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
    // if (strBin.indexOf(bankNum.substring(0, 2)) == -1) {
    //   return {
    //     'status': false,
    //     'msg': '银行卡号开头6位不符合规范'
    //   }
    // }
    return {
      'status': true,
      'msg': '校验通过'
    }
  },
  phone(pone) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(pone)) {
      return {
        'status': false,
        'msg': '错误的手机号'
      };
    } else {
      return {
        'status': true,
        'msg': '验证通过'
      };
    }
  },
  /**
   *  500.03
   * @param {*} money 
   */
  money(money) {
    var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    if (reg.test(money)) {
      return {
        'status': true,
        'msg': '验证通过'
      };
    } else {
      return {
        'status': false,
        'msg': '验证失败'
      };
    }
  },
  /**
   * 卡有效期（月年）
   * 1804，3102
   */
  cardExpiry(expiry) {
    var myreg = /^[0-1][0-9][0-9][0-9]$/; 
    if (!myreg.test(expiry)) {
      return {
        'status': false,
        'msg': '错误的有效期'
      };
    } else {
      return {
        'status': true,
        'msg': '验证通过'
      };
    }
  },
  /**
   * 卡验证码
   * 234
   */
  cardCaptcha(captcha) {
    var myreg = /^[0-9]{3}$/;
    if (!myreg.test(captcha)) {
      return {
        'status': false,
        'msg': '错误的验证码'
      };
    } else {
      return {
        'status': true,
        'msg': '验证通过'
      };
    }
  }
}
