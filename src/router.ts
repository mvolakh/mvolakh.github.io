import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: "Home",
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/study',
      name: 'Study at VU',
      component: () => import('./views/Study.vue'),
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('./views/Projects.vue')
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('./views/NotFound.vue'),
    }
  ],
})