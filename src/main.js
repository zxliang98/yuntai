import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import BaiduMap from 'vue-baidu-map'

import './style/base.less'
import './style/index.less'

Vue.use(ElementUI)

Vue.use(BaiduMap, {
  ak: '1c6h6jloEGGGaSe0TVD1XRrplaCqhszP' // 这个地方是官方提供的ak密钥
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
