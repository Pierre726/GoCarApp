<script setup>
import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'
import {mdiPlus, mdiMinus} from '@mdi/js'

let router = useRouter() 
let depart=ref()
let nbrPassager=1
let destination=ref()
const config= {
      headers:{
      Authorization:'Bearer ' + localStorage.getItem('token')
      }
    }

    function decrement () {
        nbrPassager--
    }
    function increment () {
        nbrPassager++
    }

async function onSearch(){
  console.log(depart.value, destination.value)
  await axios
  .get('http://localhost:8000/api/trajet/search', config) 
  .then((response)=>{
    console.log(response)
      router.replace({path:'/search', query: {depart:depart.value, destination:destination.value}});
  })
  .catch(error=> console.log(error));
}

let villes=ref(['Abomey', 'Abomey-Calavi', 'Aplahoué','Banikoara', 'Bassila', 'Bembèrèkè', 'Bohicon', 'Boukoumbé', 'Comé', 'Cotonou', 'Cové', 'Dassa-Zoumé', 'Djougou','Dogbo-Tota', 'Kandi', 'Lokossa', 'Malanville', 'Natitingou', 'Nikki', 'Ouidah', 'Parakou', 'Pobé', 'Porto-Novo', 'Sakété', 'Savalou', 'Savé', 'Sinendé', 'Tanguiéta', 'Tchaourou', 'Tori-Bossito', 'Za-Kpota'
])

</script>

<template>
    <form>
        <v-autocomplete
          v-model="depart"
          color="primary"
          label="Départ"
          :items="villes"
          required
          placeholder=""
        ></v-autocomplete>

        <v-autocomplete
          v-model="destination"
          color="primary"
          label="Destination"
          :items="villes"
          required
          placeholder=""
        ></v-autocomplete>

        <v-text-field
          v-model="date"
          color="primary"
          label="Date"
          required
          placeholder="aaaa:mm:jj"
        ></v-text-field>

        <v-slider
        v-model="nbrPassager"
        :color="color"
        track-color="grey"
        min="1"
        max="218"
        :step="1"
      >
        <template v-slot:prepend>
          <v-btn
            size="small"
            variant="text"
            :icon="mdiMinus"
            :color="color"
            @click="decrement"
          ></v-btn>
        </template>

        <template v-slot:append>
          <v-btn
            size="small"
            variant="text"
            :icon="mdiPlus"
            :color="color"
            @click="increment"
          ></v-btn>
        </template>
      </v-slider>
        
         <v-divider></v-divider>

            <v-card-actions>
            <v-btn 
            block
            class="mb-8"
            color="success"
            size="large"
            variant=""
            @click="onSearch"
            >
                Submit
            </v-btn>
            </v-card-actions>
    </form>
</template>