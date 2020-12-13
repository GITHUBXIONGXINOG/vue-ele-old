import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/static/css/reset.css'
import './common/scss/index.scss'
import VueResouce from 'vue-resource'
Vue.config.productionTip = false
//全局注册
Vue.use(VueResouce)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
