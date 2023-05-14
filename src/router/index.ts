import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'glThree',
			component: () => import('../views/glThree/glThree.vue')
    },
		{
		  path: '/glOne',
		  name: 'glOne',
		  component: () => import('../views/glOne.vue')
		},
		{
		  path: '/glTwo',
		  name: 'glTwo',
		  component: () => import('../views/glTwo.vue')
		},
		{
		  path: '/glThree',
		  name: 'home',
		  component: () => import('../views/home.vue')
		},
  ]
})

export default router
