const SERVERS = {
  DEVELOPMENT: {
    IMAGE: 'http://app.zgzngj.com'
  },
  TEST: {
    IMAGE: 'http://web.zgzngj.com:8080'
  },
  PRODUCTION: {
    IMAGE: 'http://web.zgzngj.com:8080'
  }
  
}
const CONSTS = {
  LOCALSTORAGE: {
    CERTIFICATION_SUCCESS: 'CERTIFICATION_SUCCESS',
    ACCESS_TOKEN:'token',
    USER_INFO: 'USER_INFO'
  },

  SMS_CODE_TYPE: {
    ORTHER: 3
  },
  USER_AUDIT: {
    DOING: 0,
    UNDO: -1,
    SUCESS: 1,
    FAIL:2
  },
  PLAN_STATUS: {
    UNDO: {
      CODE: -1,
      DES: "未执行"
    },
    FAIL: {
      CODE: 0,
      DES: "执行失败"
    },
    DONE_SUCCESS: {
      CODE: 1,
      DES: "执行成功"
    }
  },
  BILL_TYPE:{ // 
    PLAN_REPAY: 0, //计划还款
    PLAN_CONSUME: 1, // 计划消费
    
    CREDIT_WITHDRAW: 2, // 信用卡提现 
    THIRD_RECHARGE: 3, // 第三方充值
    BENEFIT_WITHDRAW: 4, // 分润提现

  }
}

CONSTS.SERVERS = SERVERS[process.env.NODE_ENV.toUpperCase().toString()]
export default CONSTS
