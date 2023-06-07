<script setup>
import {ref, onMounted} from 'vue'
// import ProfilUtilisateur from  '../components/ProfilUtilisateur.vue'
import axios from 'axios'
//import {mdiAccount} from '@mdi/js'
//import {useRouter} from 'vue-router'
import {RouterLink} from 'vue-router'

let trajets=ref({})
//let router=useRouter()
const config= {
    headers:{
      Authorization:'Bearer ' + localStorage.getItem('token')
    }
}
onMounted(()=>{
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
  
  <v-container style="max-width: 500px;"
  v-for="trajet in trajets" :key="trajet">
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
            Carrefour arconville
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
            Carrefour tokpa
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
        <h2>{{ trajet.prix}}$</h2>
      </div>
      </div>
    <v-divider></v-divider>

    <div class="d-flex pt-6 pb-6">
        <h2 class="me-16">Numéro du trajet:</h2>
      <div>
        <h2 class="font-weight-bold">{{ trajet.id}}</h2>
      </div>
      </div>

    <v-spacer></v-spacer>
    
    <div class="d-flex pt-6 pb-6">
      <h2>{{ trajet.conditions }}</h2>
    </div>
    
    <div class="d-flex pt-6 pb-6">
      <RouterLink to=""><h2>Contacter le conducteur</h2></RouterLink>
    </div>
        <RouterLink to="/reservation"><v-btn 
        type="submit"
        size="large"
        class="mb-4"
        color="success"
        >
          Réserver sur ce trajet
        </v-btn></RouterLink>
  </v-card>
  </v-container>
</template>
<style scoped>

</style>