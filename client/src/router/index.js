import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/EventDetail.vue')
  },
  {
    path: '/event-payment/:id',
    name: 'EventPayment',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/EventPayment.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/profile/edit',
    name: 'ProfileEdit',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/ProfileEdit.vue')
  },
  {
    path: '*',
    name: 'NoContent',
    meta: {
      layout: 'main'
    },
    component: () => import('../components/app/AppNoContent')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
