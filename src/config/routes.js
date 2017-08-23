import VueRouter from 'vue-router'
import home from '../components/home.vue'
import firstCom from '../components/firstCom.vue'
import secondcomponent from '../components/secondCom.vue'

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: home
    },
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
