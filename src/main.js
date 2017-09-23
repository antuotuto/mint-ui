import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(MintUI)

// 默认css样式
import './assets/css/delay.css'

// 路由
import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
