import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.css'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(vueAxios, axios)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
