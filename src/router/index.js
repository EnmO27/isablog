import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReadView from '../views/ReadView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/blog/:page',
    name: 'home',
    component: HomeView
  },
  {
    path: '/read/:id',
    name: 'read',
    component: ReadView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
