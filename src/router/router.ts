import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from '../pages/HomePage.vue'
import Product from '../pages/ProductPage.vue'
import About from '../pages/AboutPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Product
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router