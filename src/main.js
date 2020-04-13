import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './http/axios'

import BaiduMap from 'vue-baidu-map'

import './style/base.less'
import './style/index.less'

import myBreadcrumb from '@/components/my-breadcrumb/myBreadcrumb'
import myPullDownRefresh from '@/components/my-pull-down-refresh/myPullDownRefresh'

import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor)

Vue.component('my-breadcrumb', myBreadcrumb)
Vue.component('my-pull-down-refresh', myPullDownRefresh)

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
