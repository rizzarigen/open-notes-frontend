import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import SignUpPage from '@/pages/SignUpPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      component: MainPage
    },
    {
      path: '/login', 
      component: LoginPage
    },
    {
      path: '/signup', 
      component: SignUpPage
    },
    {
      path: '/*', 
      component: MainPage
    },
  ],
})

export default router
