import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank'
import Index from '@/page/index'
import changeCity from '@/page/changeCity'
import goodsList from '@/page/goodsList'
import Login from '@/page/login'
import Register from '@/page/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'default',
    redirect: '/index',
    component: defaultPage,
    children: [{
      path: 's/:name',
      name: 'goods',
      component: goodsList
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/changecity',
      name: 'changeCity',
      component: changeCity
    }
    ]
  },
  {
    path: '/blank',
    name: 'blank',
    component: blankPage,
    children: [{
      path: 'login',
      name: 'login',
      component: Login
    },
    {
      path: 'register',
      name: 'register',
      component: Register
    }
    ]
  }
  ]
})
