import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReadView from '../views/ReadView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: to => {
      // La función recibe la ruta de destino como argumento
      // Puedes devolver una ruta relativa o un objeto { path: 'profile' }
      return { path: '/blog/1' };
    }
  },
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
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
