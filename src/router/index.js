import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import NotFound from "@/views/NotFound";
import AddPayment from "@/components/AddPayment";


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:page',
    name: 'page',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '*',
    redirect: {name: 'notfound'}
  },
  {
    path: '/add/payment',
    name: 'addPayment',
    component: AddPayment,
    children: [
      {
        path: ':slug',
        component: AddPayment,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
