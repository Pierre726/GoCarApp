<script setup>
import {ref} from 'vue'
import axios from 'axios'

let trajet_id=ref()
let dateReservation=ref('')
const config= {
  headers:{
    Authorization:'Bearer ' + localStorage.getItem('token')
  }
}

const url='http://localhost:8000/api/reserver'
function reserver(){
  axios
  .post(url, {
    "trajet_id": trajet_id.value,
    "dateReservation": dateReservation.value,
  },config)
  .then((response)=>{
    console.log(response)
  }
).catch(error=> {
    console.log(error)
  })
}
</script>

<template>
  <v-container style="max-width: 500px;"> 
    <h1 class="text-center text-h4 pb-4">Réservation et Paiement</h1>
    <form>
      <h2>Veuillez entrer le numéro du trajet</h2>
      <v-text-field
        v-model="trajet_id"
        label=""
        placeholder=""
        variant="solo"
      ></v-text-field>
      <h2>Date de la réservation</h2>
      <v-text-field
        v-model="dateReservation"
        label=""
        placeholder="ex: AAAA:MM:JJ"
        variant="solo"
      ></v-text-field>
      <RouterLink to="/paiement"><v-btn type="submit" @click="reserver" color="success">Réserver</v-btn></RouterLink>
    </form>
  </v-container>
</template>