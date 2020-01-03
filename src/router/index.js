import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import PagesHome from '@/views/pages-home/PagesHome'
import PagesTicket from '@/views/pages-ticket/PagesTicket'
import PagesNotice from '@/views/pages-notice/PagesNotice'
import PagesZone from '@/views/pages-zone/PagesZone'
import PagesStaff from '@/views/pages-staff/PagesStaff'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'pages-home',
        component: PagesHome
      }, {
        path: '/ticket',
        name: 'pages-ticket',
        component: PagesTicket
      }, {
        path: '/zone',
        name: 'pages-zone',
        component: PagesZone
      }, {
        path: '/notice',
        name: 'pages-notice',
        component: PagesNotice
      }, {
        path: '/staff',
        name: 'pages-staff',
        component: PagesStaff
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
