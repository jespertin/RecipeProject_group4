import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomepageView.vue')

    },
    {
      path: '/category/:categoryName',
      name: 'specificCategory',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/recipe/:recipeId',
      name: 'specificRecipe',
      component: () => import('../views/RecipeView.vue')
    }
  ]
})

export default router
