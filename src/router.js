import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import store from "./store/store";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      meta:{
        Login:false
      },
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      meta:{
        Login:true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta:{
        Login:false
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/About',
      name: 'About',
      meta:{
        Login:true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
          path: '/active',
          name: 'active',
        meta:{
          Login:true
        },
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Active.vue')
      }
  ]
});
router.beforeEach((to, from, next) => {
  let session = store.state.session;
  if (!!session){
    to.meta.Login?next():next("/home")
  }else {
    to.meta.Login?next("/"):next()
  }
});
export default router;
