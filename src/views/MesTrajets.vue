<script setup>
import {onMounted, ref} from 'vue'
import axios from 'axios'
import {useMeStore} from '../stores/auth.store'
import { 
//  useRoute, 
//  useRouter 
} from 'vue-router'

let dateReservation=ref('')
// let router=useRouter()
// let trajets=ref({})

const auth= useMeStore()

const config= {
  headers:{
    Authorization:'Bearer ' + localStorage.getItem('token')
  }
}
// const url='http://localhost:8000/api/reserver'
// const route=useRoute()
onMounted(()=>{
   auth.me()
   console.log(auth.user)
   getTrajets()
})

function getTrajets(){
  axios
  .get(`http://localhost:8000/api/trajets?user_id=${auth.user.data.id}`, config)
  .then(
    (reponse) => {
      console.log(reponse)
    }
  )
}

</script>

<template>
  <center class="ma-16 mb-16" v-if="auth.user.isLoading"><v-progress-circular indeterminate :size="67" :width="6" ></v-progress-circular></center>

  <v-container style="max-width: 500px;" v-else> 
    <h1 class="text-center text-h4 pb-4">Réservation et Paiement</h1>
    <form>
      <h2>Date de la réservation</h2>
      <v-text-field
        v-model="dateReservation"
        label=""
        placeholder="ex: AAAA:MM:JJ"
        variant="solo"
      ></v-text-field>
     <v-btn color="success">Réserver</v-btn>
    </form>
  </v-container>
</template>