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
      path: '/success/:user_id',
      name: 'publication',
      component: () => import('../views/AfterPublish.vue')
    },
    {
      path: '/mes-trajets/:user_id',
      name: 'trajets',
      component: () => import('../views/MesTrajets.vue')
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
      path: '/openChat/:user_id',
      name: 'message',
      component: () => import('../views/MessagePage.vue')
    },
    {
      path: '/reservation/trajet/:trajetId',
      name: 'reservation',
      component: () => import('../views/ReservationPage.vue')
    },
    {
      path: '/leaflet-maps',
      name: 'leaflet-maps',
      component: () => import('../views/LeafletMapPage.vue')
    },
    {
      path: '/reservation/trajet/paiement/:id/:montant',
      name: 'paiement',
      component: () => import('../views/PaiementPage.vue')
    },
    {
      path: '/reservation/error',
      name: 'erreur',
      component: () => import('../views/ErreurReservation.vue')
    },
    {
      path: '/mon-profil',
      name: 'profil',
      component: () => import('../views/MonProfil.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactPage.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardPage.vue')
    },
    {
      path: '/dashboard/allTrajets',
      name: 'dashboard-trajets',
      component: () => import('../views/AllTrajets.vue')
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
