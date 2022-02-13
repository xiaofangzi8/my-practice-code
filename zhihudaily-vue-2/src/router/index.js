import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Detail from '../views/Detail'

Vue.use(VueRouter)

const router =  new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },{
      path:'*',
      redirect: '/'
    }
  ]
});

export default router;

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
