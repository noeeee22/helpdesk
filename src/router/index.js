import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../hooks/index.vue'),
      children: [
        {
            path: 'tableTickets',
            name: 'tableTickets',
            component: () => import('../components/modules/dataTables/tableTickets.vue')
        },
        {
            path: 'tableAgents',
            name: 'tableAgents',
            component: () => import('../components/modules/dataTables/tableAgents.vue')
        },
        {
            path:'panelPrincipal',
            name:'panelPrincipal',
            component:()=> import('@/components/panelprincipal/panelPrincipal.vue')
        },
      ]
    },

  ]
})

export default router
