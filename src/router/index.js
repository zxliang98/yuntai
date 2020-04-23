import Vue from 'vue'
import VueRouter from 'vue-router'

import { Storage } from '@/common/tools'

import Home from '@/views/Home.vue'
import PagesHome from '@/views/pages-home/PagesHome'
import PagesPlay from '@/views/pages-play/PagesPlay'
import PagesNotice from '@/views/pages-notice/PagesNotice'
import PagesZone from '@/views/pages-zone/PagesZone'
import PagesStaff from '@/views/pages-staff/PagesStaff'
import PagesAbout from '@/views/pages-about/PagesAbout'
import CreateNew from '@/views/create-new/createNew'
import DetailNew from '@/views/detail/notice-detail/noticeDetail'

import Login from '@/views/login/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'pages-home',
        component: PagesHome
      },
      {
        path: '/play',
        name: 'pages-play',
        component: PagesPlay
      },
      {
        path: '/zone',
        name: 'pages-zone',
        component: PagesZone
      },
      {
        path: '/notice',
        name: 'pages-notice',
        component: PagesNotice
      },
      {
        path: '/staff',
        name: 'pages-staff',
        component: PagesStaff
      },
      {
        path: '/about',
        name: 'pages-about',
        component: PagesAbout
      },
      {
        path: '/create/:type',
        name: 'create-new',
        component: CreateNew
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: DetailNew
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let token = Storage.getToken()
  if (to.path !== '/login' && !token) {
    return next({ path: '/login' })
  }
  next()
})

export default router
