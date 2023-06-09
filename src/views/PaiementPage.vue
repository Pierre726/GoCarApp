<script setup>
import {onMounted, ref} from 'vue'
import {
  openKkiapayWidget,
   addKkiapayListener,
//   removeKkiapayListener,
} from "kkiapay";
import axios from 'axios';

let montant=ref('')
let datePaiement=ref('')
let numero=ref('')
let transaction=ref({})
let reservation_id=ref()

const config= {
  headers:{
  Authorization:'Bearer ' + localStorage.getItem('token')
  }
}
 
const url='http://localhost:8000/api/paiement'

function  open() {
    openKkiapayWidget({
     amount: montant.value,
     api_key: "ea2090f0039411eeae3e0377b2ffdca0",
     sandbox: true,
     phone: numero.value,
    })
}

function successHandler(response) {
    console.log(response);
}

onMounted(()=>{
    addKkiapayListener('success', successHandler)
    axios
    .post(url, {
     "reservation_id": reservation_id.value,
     "montant": montant.value,
     "datePaiement": datePaiement.value,
    }, config)
    .then((response)=>{
      console.log(response)
      transaction.value=response.data
    }
    )
    .catch(error=> {
        console.log(error)
    })
})


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
        <h2 class="text-center">Montant du trajet</h2>
        <v-text-field
        v-model="montant"
        required
        variant="solo"
        >
        </v-text-field>
     <v-btn class="d-flex justify-center align-center w-100" type="submit" color="primary" @click="open">Continuer</v-btn>
    </v-container>
</template>