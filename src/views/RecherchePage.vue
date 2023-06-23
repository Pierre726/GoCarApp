<script setup>
import {ref, onMounted} from 'vue'
// import ProfilUtilisateur from  '../components/ProfilUtilisateur.vue'
import axios from 'axios'
import {useMeStore} from '../stores/auth.store'
import {mdiClose} from '@mdi/js'
//import {useRouter} from 'vue-router'
import {RouterLink} from 'vue-router'

let trajets=ref({})
const auth= useMeStore()
// let trouve=ref(false)
//let router=useRouter()
const config= {
    headers:{
      Authorization:'Bearer ' + localStorage.getItem('token')
    }
}
onMounted(()=>{
  auth.me()
   console.log(auth.user)
    const queries= new URLSearchParams(window.location.search)
    console.log(queries.toString())
 axios
  .get('http://localhost:8000/api/trajet/search?' + queries.toString(), config) 
  .then((response)=>{
    console.log(response)
    trajets.value=response.data
  })
  .catch(error=> {
  console.log(error)
 })
})

</script>

<template>
  <center class="ma-16 mb-16" v-if="auth.user.isLoading"><v-progress-circular indeterminate :size="67" :width="6" ></v-progress-circular></center>
  <v-container style="max-width: 600px;" v-else> 
    <RouterLink to="/search-trajet">
      <v-icon :icon="mdiClose" size="36px"/>
    </RouterLink>
    <div v-if="trajets.length>0"> 
      <div v-for="trajet in trajets" :key="trajet">
        <div class="text-center pb-4">
         <h1>{{ trajet.dateTrajet }}</h1>
        </div>
        <v-card  
          class="mx-auto pa-4 pb-2"
          elevation="8"
        > 
        <v-timeline density="compact"
            side="end">
          <v-timeline-item
            dot-color="pink"
            size="small"
          >
            <div class="d-flex">
              <strong class="me-4">Départ</strong>
              <div>
                <strong>{{ trajet.depart }}</strong>
                <div class="text-caption">
                  Carrefour 
                </div>
              </div>
            </div>
          </v-timeline-item>

          <v-timeline-item
            dot-color="teal-lighten-3"
            size="small"
          >
            <div class="d-flex">
              <strong class="me-4">Destination</strong>
              <div>
                <strong>{{ trajet.destination }}</strong>
                <div class="text-caption mb-2">
                  Carrefour 
                </div>
              </div>
            </div>
          </v-timeline-item>

          <v-timeline-item
            dot-color="pink"
            size="small"
          >
            <div class="d-flex">
              <strong class="me-4">Heure de Départ</strong>
              <div>
                <strong>{{ trajet.heureDepart }}</strong>
              </div>
            </div>
          </v-timeline-item>

          <v-timeline-item
            dot-color="teal-lighten-3"
            size="small"
          >
            <div class="d-flex">
              <strong class="me-4">Nombre de Passager</strong>
              <div>
                <strong>{{ trajet.nbrPassager}}</strong>
              </div>
            </div>
          </v-timeline-item>
          </v-timeline>
          
          <v-divider></v-divider>

          <v-spacer></v-spacer>
            <div class="d-flex pt-6 pb-6">
              <h2 class="me-16">Prix par passager:</h2>
            <div>
              <h2>{{ trajet.prix}} FCFA</h2>
            </div>
            </div>
          <v-divider></v-divider>

          <div class="d-flex pt-6 pb-6">
            <h2>{{ trajet.conditions }}</h2>
          </div>
          
          <v-row> 
            <v-col cols="12" md="6">
              <RouterLink :to="{ name: 'message', params: { user_id: trajet.user_id }}"
              >
              <v-btn
                color="teal"
              >
                Contacté le chauffeur
              </v-btn>
              </RouterLink>
            </v-col>
            <v-col cols="12" md="6">
              <RouterLink :to="{ name: 'reservation', params: { trajetId: trajet.id }}"
              >
                <v-btn 
                color="teal" 
                >
                Réserver sur ce trajet
                </v-btn>
              </RouterLink>
            </v-col>
            <!-- <v-col cols="12" md="4">
              <RouterLink to="/leaflet-maps"
              >
                <v-btn 
                color="teal" 
                >
                Localisation
                </v-btn>
              </RouterLink>
            </v-col> -->
          </v-row>
        </v-card>
      </div>
    </div>
    <div v-else>
      <center><v-img
        alt="Avatar"
        max-width="300"
        src="https://img.freepik.com/vecteurs-premium/pack-icones-isometriques-transport_9206-10248.jpg?size=626&ext=jpg&ga=GA1.1.1393112986.1685581487&semt=sph"
        >
        </v-img></center>
        <p class="text-h4">Il n'a pas de trajet actuellement pour votre recherche.Merci!!!</p>
    </div>
  </v-container>
</template>
<style scoped>

</style>