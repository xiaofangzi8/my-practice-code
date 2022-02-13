import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Detail from '../views/Detail'

Vue.use(Router)

const router =  new Router({
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
