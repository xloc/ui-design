import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: () => import('../views/Showcase.vue'),
      children: [
        {
          path: ':component',
          name: 'component',
          component: () => import('../views/ComponentView.vue')
        }
      ]
    }
  ]
})

export default router 