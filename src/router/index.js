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
          meta: {
            title: '首页'
          },
          component: () =>
            import ('@/modules/index/home')
        },
        {
          path: 'shop',
          meta: {
            title: '首页'
          },
          component: () =>
            import ('@/modules/index/shop')
        },
        {
          path: 'card',
          meta: {
            title: '首页'
          },
          component: () =>
            import ('@/modules/index/card')
        },
        {
          path: 'me',
          meta: {
            title: '首页'
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
          path: 'repay_repay/:cardId',
          meta: {
            title: '我要还款'
          },
          component: () =>
            import ('@/modules/repay/repay')
        }
      ]
    }
  ]
})

export default router
