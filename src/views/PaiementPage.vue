<script setup>
import {onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import {
  openKkiapayWidget,
   addKkiapayListener,
//   removeKkiapayListener,
} from "kkiapay";
import axios from 'axios';

let montant=ref('')
let datePaiement=ref('')
let numero=ref('')
let reservation_id=ref()
let transactionId=ref('')
let reservation=ref('')

const config= {
  headers:{
  Authorization:'Bearer ' + localStorage.getItem('token')
  }
}
 
const url='http://localhost:8000/api/transaction'

function  open() {
  openKkiapayWidget({
    amount: montant.value,
    api_key: "ea2090f0039411eeae3e0377b2ffdca0",
    sandbox: true,
    phone: numero.value,
  })
}

function successHandler(response) {
  console.log(response.transactionId);   
  transactionId.value=response.transactionId
  axios
  .post(url, {
    "reservation_id": reservation_id.value,
    "montant": montant.value,
    "datePaiement": datePaiement.value,
    "transactionId": transactionId.value,
  }, config)
  .then((response)=>{
    console.log(response)
  }
  )
  .catch(error=> {
      console.log(error)
  })
}

const route=useRoute()
onMounted(()=>{
    reservation_id.value=route.params.id
    montant.value=route.params.montant
    getReservation()
    addKkiapayListener('success', successHandler)
})

function getReservation(){
  axios
  .get('http://localhost:8000/api/reservation/' + route.params.id, config)
  .then(
    (reponse) => {
      console.log(reponse)
      reservation.value=reponse.data.data.dateReservation
      datePaiement.value=reservation.value
    }
  )
}
</script>
<template>
    <v-container style="max-width: 500px;">
        <h2 class="text-center">Numéro mobile money</h2>
        <v-text-field
        v-model="numero"
        required
        variant="solo"
        >
        </v-text-field>
     <v-btn class="d-flex justify-center align-center w-100" type="submit" color="primary" @click="open">Continuer</v-btn>
    </v-container>
</template>
<style scoped>
</style>