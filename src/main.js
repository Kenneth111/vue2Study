import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import firstCom from './components/firstCom.vue'
import secondcomponent from './components/secondCom.vue'
Vue.use(ElementUI)
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: firstCom
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
