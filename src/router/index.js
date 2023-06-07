import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import axios from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'welwomePage',
      component: WelcomePage
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: () => import('../views/RegisterPage.vue')
    },
    {
      path: '/protected-page',
      name: 'protectedPage',
      component: () => import('../views/ProtectedPage.vue')
    },
    {
      path: '/publier-trajet',
      name: 'publierTrajet',
      component: () => import('../views/PublierTrajet.vue')
    },
    {
      path: '/search-trajet',
      name: 'searchTrajet',
      component: () => import('../views/SearchTrajet.vue')
    },
    {
      path: '/search',
      name: 'recherche',
      component: () => import('../views/RecherchePage.vue')
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: () => import('../views/ReservationPage.vue')
    },
    {
      path: '/paiement',
      name: 'paiement',
      component: () => import('../views/PaiementPage.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  let isAuthenticated = false
  const config= {
  headers:{
  Authorization:'Bearer ' + localStorage.getItem('token')
  }
 };
 const url='http://localhost:8000/api/me';
 axios 
 .get(url, config) 
 .then(res=>{
  console.log(res)
  if(res.status === 200){
    isAuthenticated= true
    if (!isAuthenticated && to.name !== 'login' && to.name !== 'signUp') {
      // redirect the user to the login page
       return { name: 'login' }
    }
  }
 })
 .catch(err=> {
  console.log(err)
  return { name: 'login' }
 })

})

export default router
