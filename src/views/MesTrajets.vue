<script setup>
import {onMounted, ref} from 'vue'
import axios from 'axios'
import {mdiClose} from '@mdi/js'
import {useMeStore} from '../stores/auth.store'
import { 
 useRoute, 
} from 'vue-router'

const auth= useMeStore()
let mesTrajets=ref({})
const config= {
  headers:{
    Authorization:'Bearer ' + localStorage.getItem('token')
  }
}

const route=useRoute()
onMounted(()=>{
   auth.me()
   console.log(auth.user)
   getTrajets()
})

function getTrajets(){
  axios
  .get(`http://localhost:8000/api/trajets?user_id=${route.params.user_id}`, config)
  .then(
    (reponse) => {
      console.log(reponse.data)
      mesTrajets.value=reponse.data.data
    }
  )
}

</script>

<template>
  <center class="ma-16 mb-16" v-if="auth.user.isLoading"><v-progress-circular indeterminate :size="67" :width="6" ></v-progress-circular></center>

  <v-container style="max-width: 800px;" v-else> 
    <RouterLink to="/protected-page">
      <v-icon :icon="mdiClose" size="36px"/>
    </RouterLink>

    <h1 class="text-center text-green text-h4 pb-4">Mes Trajets</h1>

    <v-table density="compact">
    <thead>
      <tr>

        <th class="px-0 font-weight-black">
          Départ
        </th>

        <th class="px-0 font-weight-black">
          Destination
        </th>

        <th class="px-0 font-weight-black">
          Date de départ
        </th>

        <th class="px-0 font-weight-black">
          Heure de départ
        </th>

        <th class="px-0 font-weight-black">
          Prix par place
        </th>

      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, i) in mesTrajets"
        :key="i"
      >
        <td>{{ item.depart }}</td>
        <td>{{ item.destination }}</td>
        <td>{{ item.dateTrajet }}</td>
        <td>{{ item.heureDepart }}</td>
        <td>{{ item.prix }}</td>
      </tr>
    </tbody>
  </v-table>
  </v-container>
</template>