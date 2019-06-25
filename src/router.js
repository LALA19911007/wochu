import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Footer = () => import('@/components/common/Footer')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('@/views/Home'),
        footer: Footer
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('@/views/Kind'),
        footer: Footer
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('@/views/Cart'),
        footer: Footer
      }
    },
    {
      path: '/list',
      name: 'list',
      components: {
        default: () => import('@/views/List')
      }
    },
    {
      path: '/Address',
      name: 'address',
      components: {
        default: () => import('@/views/Address'),
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/User'),
        footer: Footer
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('@/views/Login')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('@/views/Register')
      }
    },
    {
      path: '/detail/:goodsGuid',
      name: 'detail',
      components: {
        default: () => import('@/views/Detail')
      }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (localStorage.getItem('isLogin') === 'ok') {

//   }
// })

export default router
