import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from "@/components/seller/seller";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/goods'
  },
  {
    path:'/goods',
    name: 'Goods',
    component: Goods
  },
  {
    path:'/ratings',
    name: 'Ratings',
    component: Ratings
  },
  {
    path:'/seller',
    name: 'Seller',
    component: Seller
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
