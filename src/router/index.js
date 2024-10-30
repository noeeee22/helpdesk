import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../hooks/principal.vue'),
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
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login/login.vue'),
    },

  ]
})

// router.beforeEach(async (to, from, next) => {

//   const authToken = localStorage.getItem('authToken');
//   if (authToken) {
//       if (to.name === "login") {
//           return next({ name: "panelPrincipal" });
//       }
//       return next()
//   } else {
//       if (to.name !== 'login') {
//           return next({ name: "login" })
//       }
//       return next()
//   }
// })

export default router
