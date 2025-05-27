import { createRouter, createWebHashHistory } from 'vue-router'
import { componentRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
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
          path: '',
          redirect: () => {
            // Get the latest component by creation time
            const latestComponent = componentRoutes.reduce((latest, current) =>
              current.created > latest.created ? current : latest
            )
            return `/showcase/${latestComponent.path}`
          }
        },
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