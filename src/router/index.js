import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import store from '@/store'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () =>
      // route level code-splitting
      // this generates a separate chunk (404.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      import(/* webpackChunkName: "404" */ '../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && to.meta.noAuthenticationRequired !== true && !store.getters['security/isAuthenticated']) {
    store.commit('security/setSuccessfulPath', to)
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
