<script setup>
import {onMounted, ref} from 'vue'
import axios from 'axios'
import { useRoute, 
 useRouter 
} from 'vue-router'
import { mdiCalendar } from '@mdi/js';

let trajetId=ref('')
let dateReservation=ref('')
let router=useRouter()
let trajet=ref({})


const config= {
  headers:{
    Authorization:'Bearer ' + localStorage.getItem('token')
  }
}
const url='http://localhost:8000/api/reserver'
const route=useRoute()
onMounted(()=>{
   trajetId.value=route.params.trajetId
   getTrajet()
})

function getTrajet(){
  axios
  .get('http://localhost:8000/api/trajet/' + route.params.trajetId, config)
  .then(
    (reponse) => {
      console.log(reponse)
      trajet.value=reponse.data.data
    }
  )
}

function reserver(){
  axios
  .post(url, {
    "trajet_id": trajetId.value,
    "dateReservation": dateReservation.value,
  },config)
  .then((response)=>{
    console.log(response)
    router.push({name:'paiement', params: {id: response.data.reservationId.id, montant: trajet.value.prix}})
  }
  )
  .catch(error=> {
    console.log(error)
    router.push({path:'/reservation/error'})
  })
}
</script>

<template>
  <v-container style="max-width: 500px;"> 
    <h1 class="text-center text-h4 pb-4">Réservation et Paiement</h1>
    <form>
      <h2>Date de la réservation</h2>
      <V-date-picker v-model.string="dateReservation" trim-weeks 
              :masks="{modelValue:'YYYY-MM-DD'}"
            >
              <template #default="{inputValue, inputEvents}"> 
                <v-text-field
                 :value="inputValue"
                 autocomplete="off"
                 placeholder="Date de réservation"
                 v-on="inputEvents"
                 :append-inner-icon="mdiCalendar"
                ></v-text-field>
              </template>
            </V-date-picker>
     <v-btn @click="reserver" color="success">Réserver</v-btn>
    </form>
  </v-container>
</template>