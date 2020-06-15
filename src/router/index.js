import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home.vue'
// import City from '../views/city/City.vue'
// import Detail from '../views/detail/Detail.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
      component: () =>import('../views/home/Home.vue')
  },
  {
    path:'/city',
    name:'City',
    component: () =>import('../views/city/City.vue')
  },
  {
    path:'/detail/:id',
    name:'Detail',
    component: () =>import('../views/detail/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
