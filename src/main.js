import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {router} from './config/routes'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource);

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
