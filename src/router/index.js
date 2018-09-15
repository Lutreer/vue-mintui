import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '*',
      redirect: '/index/home'
    },
    {
      path: '/index',
      redirect: '/index/home'
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () =>
        import ('@/modules/login')
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        title: ''
      },
      component: () =>
        import ('@/modules/index'),
      children: [{
          path: 'home',
          name: 'home',
          meta: {
            title: '首页',
            tab:"home"
          },
          component: () =>
            import ('@/modules/index/home')
        },
        {
          path: 'shop',
          name: 'shop',
          meta: {
            title: '云商',
            tab:"shop"
          },
          component: () =>
            import ('@/modules/index/shop')
        },
        {
          path: 'card',
          name: 'card',
          meta: {
            title: '卡圈',
            tab:"card"
          },
          component: () =>
            import ('@/modules/index/card')
        },
        {
          path: 'me',
          name: 'me',
          meta: {
            title: '我的',
            tab:"me"
          },
          component: () =>
            import ('@/modules/index/me')
        }
      ]
    },
    {
      path: '/sub',
      name: 'sub',
      meta: {
        title: ''
      },
      component: () =>
        import ('@/modules/sub'),
      children: [{
          path: 'certification_idcard',
          meta: {
            title: '身份信息校验',
            header: {
              display: true,
              color: "#000000", // white, transparent, #xxxxxx;default: white
              backgroundColor: "#fff", // white, transparent, #xxxxxx;default: white
              jointMode: "conjoint", //conjoint, cover ;default:conjoint
            }
          },
          component: () =>
            import ('@/modules/certification/idcard')
        },
        {
          path: 'certification_savingscard',
          meta: {
            title: '储蓄卡绑定'
          },
          component: () =>
            import ('@/modules/certification/savingscard')
        },
        {
          path: 'certification_checkFound-card',
          meta: {
            title: '资金校验'
          },
          component: () =>
            import ('@/modules/certification/checkFound-card')
        },
        {
          path: 'certification_checkFound-date/:number',
          meta: {
            title: '资金校验'
          },
          component: () =>
            import ('@/modules/certification/checkFound-date')
        },
        {
          path: 'certification_checkFound-phone/:number/:date/:code',
          meta: {
            title: '资金校验'
          },
          component: () =>
            import ('@/modules/certification/checkFound-phone')
        },
        {
          path: 'withdraw_withdraw',
          meta: {
            title: '我要提现'
          },
          component: () =>
            import ('@/modules/withdraw/withdraw')
        },
        {
          path: 'repay_addPlan',
          meta: {
            title: '新建计划'
          },
          component: () =>
            import ('@/modules/repay/addPlan')
        },
        {
          path: 'repay_bill',
          meta: {
            title: '手动添加账单',
            header: {
              borderBottom: "1px solid #f5f5f5"
            }
          },
          component: () =>
            import ('@/modules/repay/bill')
        },
        {
          path: 'repay_card/:creditCardId',
          meta: {
            title: '账单',
            header: {
              borderBottom: "1px solid #f5f5f5",
              backgroundColor: "white", // white, transparent, #xxxxxx;default: white
              jointMode: "conjoint", //conjoint, cover ;default:conjoint
            }
          },
          component: () =>
            import ('@/modules/repay/card')
        },
        {
          path: 'repay_allPlan/:creditCardId',
          meta: {
            title: '全部计划',
            header: {
              borderBottom: "1px solid #f5f5f5"
            }
          },
          component: () =>
            import ('@/modules/repay/allPlan')
        },
        {
          path: 'repay_planDetail/:planId',
          meta: {
            title: '还款计划详情',
            header: {
              color: "#fff",
              backgroundColor: "transparent", // white, transparent, #xxxxxx;default: white
              jointMode: "cover", //conjoint, cover ;default:conjoint
            }
          },
          component: () =>
            import ('@/modules/repay/planDetail')
        },
        {
          path: 'repay_transactionDetail/:billId/:billType',
          meta: {
            title: '交易明细',
            header: {
              borderBottom: "1px solid #f5f5f5",
            }
          },
          component: () =>
            import ('@/modules/repay/transactionDetail')
        },
        {
          path: 'system_message',
          meta: {
            title: '消息中心',
            header: {
              borderBottom: "1px solid #f5f5f5",
            }
          },
          component: () =>
            import ('@/modules/system/message')
        },
        {
          path: 'shop_addRedPacket',
          meta: {
            title: '发红包',
            header: {
              borderBottom: "1px solid #f5f5f5",
            }
          },
          component: () =>
            import ('@/modules/shop/addRedPacket')
        },
        {
          path: 'setting_index',
          meta: {
            title: '设置',
            header: {
              borderBottom: "1px solid #f5f5f5",
            }
          },
          component: () =>
            import ('@/modules/setting/index')
        }
      ]
    }
  ]
})

export default router
