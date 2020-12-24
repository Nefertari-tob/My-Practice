import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/layout",
    name:'layout',
    component: () => import('../views/layout.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    // redirect:"/About",
    // children:[
    //   {
    //     path:"/layout",
    //     component: () => import('../views/layout.vue'),
    //     meta:{
    //       title: "人员信息管理1111",
    //     }
    //   }
    // ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
