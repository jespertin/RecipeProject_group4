import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomepageView.vue')

    },
    {
      path: '/recipe',
      name: 'recipe',
      component: () => import('../views/RecipeView.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/recipe/:recipeId',
      name: 'specificRecipe',
      component: () => import('../views/RecipeView.vue')
    },
    {
      path: '/recipe/:categoryId',
      name: 'specificCategory',
      component: () => import('../views/CategoryView.vue')
    }


  ]
})

export default router
