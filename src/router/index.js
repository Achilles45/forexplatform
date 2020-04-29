import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Contact from '../views/Contact.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import ResetPassword from '../views/ResetPassword.vue'
import Academy from '../views/Academy.vue'
import VerifyEmail from '../views/VerifyEmail.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/academy',
    name: 'Academy',
    component: Academy
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/verify-email',
    name: 'VerifyEmail',
    component: VerifyEmail
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
