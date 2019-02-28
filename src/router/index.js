import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import News from '@/components/news'
import Agreement from '@/components/agreement'

Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/',
    name: 'HOME',
    component: Home
  }, {
    path: '/news',
    name: 'NEWS',
    component: News
  }, {
    path: '/agreement',
    name: 'AGREEMENT',
    component: Agreement
  }]
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0
  next()
})

export default router
