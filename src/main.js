// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '@/store'

// 格式化时间
import moment from 'moment'

import 'mint-ui/lib/style.css'
import { Button, Header, TabItem, Tabbar, Swipe, SwipeItem, Indicator, Range } from 'mint-ui'

import MyTabBar from '@/components/myComponents/myTabBar/MyTabBar.vue'
import MyCardItem from '@/components/myComponents/myCard/MyCardItem.vue'
import MyCard from '@/components/myComponents/myCard/MyCard.vue'
import ScrollBgcOpacity from '@/components/myComponents/scrollBgcOpacity/ScrollBgcOpacity.vue'
import MyShade from '@/components/myComponents/myShade/MyShade.vue'
import Song from '@/components/music/Song.vue'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = 'https://api.imjad.cn/'
// axios.defaults.baseURL = '/api'
axios.interceptors.request.use(function (config) {
  const reg = new RegExp('^/api')
  let url = config.url
  // console.log(reg.test(config.url))
  if (reg.test(url)) {
    config.url = url.replace(reg, 'https://api.imjad.cn')
  }
  if (/^\/ppi/.test(url)) {
    config.url = url.replace(/^\/ppi/, 'http://www.bufantec.com/api/douban/movie')
  }
  if (/^\/vpi/.test(url)) {
    config.url = url.replace(/^\/vpi/, 'http://101.132.188.237/vip_video')
  }
  Indicator.open({
    // text: '加载中...',
    spinnerType: 'triple-bounce'
  })
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (config) {
  Indicator.close()
  return config
}, function (error) {
  return Promise.reject(error)
})

Vue.config.productionTip = false

Vue.prototype.$axios = axios

// mint-ui组件注册
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(TabItem.name, TabItem)
Vue.component(Tabbar.name, Tabbar)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Swipe.name, Swipe)
Vue.component(Range.name, Range)
// 我的组件
Vue.component(MyCardItem.name, MyCardItem)
Vue.component(MyCard.name, MyCard)
Vue.component(MyTabBar.name, MyTabBar)
Vue.component(ScrollBgcOpacity.name, ScrollBgcOpacity)
Vue.component(MyShade.name, MyShade)
Vue.component(Song.name, Song)

// 格式化时间
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
