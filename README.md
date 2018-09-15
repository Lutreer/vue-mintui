# mobile

> A Vue.js project

## Build Setup

``` bash
# 安装依赖
npm install

# 本地开发，自动打开浏览器并热更新
npm run dev

# build for 测试
npm run test

# build for 正式
npm run build

```

```
.
├── README.md
├── build
├── config
├── index.html 
├── node_modules
├── package.json 
├── src 
│   ├── App.vue
│   ├── assets 
│   │   ├── css
│   │   │   └── common.scss // scss全局变量，方法等
│   │   ├── img
│   │   │   ├── common // 公共图片
│   │   │   │   ├── add.png
│   │   │   │   └── warn.png
│   │   │   ├── home-banner.png // 功能模块名-图片名
│   │   │   └── tab-shop.png
│   │   └── js
│   ├── components // 公共组件
│   │   ├── button
│   │   │   └── ZButton.vue
│   │   ├── card
│   │   │   └── Bill.vue
│   │   ├── date
│   │   │   ├── DayPicker.vue
│   │   │   └── MonthPicker.vue
│   │   ├── header
│   │   │   └── BackHeader.vue
│   │   └── uni-popup
│   │       ├── Cover.vue
│   │       ├── NameCertification.vue
│   │       ├── NameCertificationSuccess.vue
│   │       └── SendRedPacket.vue
│   ├── config // 开发中的配置项
│   │   ├── CONST.js // 常量
│   │   └── bank.json // 银行相关数据（后期维护）
│   ├── main.js
│   ├── modules // 功能模块（按功能划分）
│   │   ├── certification // 认证
│   │   │   ├── checkFound-card.vue // 信用卡卡号
│   │   │   ├── checkFound-date.vue // 信用卡日期
│   │   │   ├── checkFound-phone.vue // 信用卡手机号
│   │   │   ├── idcard.vue // 身份证
│   │   │   └── savingscard.vue // 储蓄卡
│   │   ├── index // tab
│   │   │   ├── card.vue // 卡券
│   │   │   ├── home.vue // 首页
│   │   │   ├── me.vue // 我的
│   │   │   └── shop.vue // 商铺
│   │   ├── index.vue // tab 一级页面
│   │   ├── login.vue // 登录
│   │   ├── repay // 计划，提现相关
│   │   │   ├── addPlan.vue
│   │   │   ├── allPlan.vue
│   │   │   ├── bill.vue
│   │   │   ├── card.vue
│   │   │   ├── planDetail.vue
│   │   │   └── transactionDetail.vue
│   │   ├── shop // 商铺（红包等）
│   │   │   └── addRedPacket.vue
│   │   ├── sub.vue // 二级页面
│   │   ├── system // 系统级别
│   │   │   └── message.vue // 消息
│   │   └── withdraw  // 提现
│   │       └── withdraw.vue
│   ├── router
│   │   └── index.js // 路由
│   ├── services // api
│   │   ├── card.js 
│   │   ├── system.js
│   │   └── user.js
│   ├── store // vuex 状态管理
│   │   ├── index.js
│   │   ├── modules
│   │   │   └── user.js
│   │   └── mutation-type.js
│   └── utils // 工具类
│       ├── eventBus.js
│       ├── filter.js // vue 过滤器
│       ├── http.js // axios 封装
│       └── validator.js // 表单校验相关
└── static
    ├── css
    │   └── reset.css 
    └── js
        └── flexible.js
```

