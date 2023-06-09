<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {mdiPlusCircleOutline, mdiMinusCircleOutline} from '@mdi/js'

let router = useRouter() 
let depart=ref()
let nbrPassager=ref(1)
let destination=ref()

function decrement(){
    if(nbrPassager.value>1){
        nbrPassager.value--
    }
}

function increment(){
    if(nbrPassager.value<8){
        nbrPassager.value++
    }
}

 function onSearch(){
  console.log(depart.value, destination.value)
      router.replace({path:'/search', query: {depart:depart.value, destination:destination.value}});
  }

let villes=ref(['Abomey', 'Aplahoué','Banikoara', 'Bassila', 'Bembèrèkè', 'Bohicon', 'Boukoumbé', 'Calavi', 'Comé', 'Cotonou', 'Cové', 'Dassa-Zoumé', 'Djougou','Dogbo-Tota', 'Kandi', 'Lokossa', 'Malanville', 'Natitingou', 'Nikki', 'Ouidah', 'Parakou', 'Pobé', 'Porto-Novo', 'Sakété', 'Savalou', 'Savé', 'Sinendé', 'Tanguiéta', 'Tchaourou', 'Tori-Bossito', 'Za-Kpota'
])

</script>

<template>
    <v-container >
     <h1 class="text-center text-h3 pb-4">Où allez-vous?</h1>
      <v-row no-gutters>
        <v-col cols="5" class="pa-0">
         <v-autocomplete
          v-model="depart"
          color="primary"
          :items="villes"
          placeholder="Départ"
          variant="outlined"
         ></v-autocomplete>
        </v-col>
        <v-col cols="5" class="pa-0">
         <v-autocomplete
          v-model="destination"
          color="primary"
          :items="villes"
          placeholder="Destination"
          variant="outlined"
         ></v-autocomplete>
        </v-col>
        <v-col cols="2" class="pa-0">
         <v-text-field
          v-model="nbrPassager"
          class="px-0"
          variant="outlined"
         >
            <template v-slot:append-inner>
            <v-icon 
            :icon="mdiPlusCircleOutline" 
            @click="increment"
            >
            </v-icon>
            </template>
            <template v-slot:prepend-inner>
            <v-icon 
            :icon="mdiMinusCircleOutline" 
            @click="decrement">
            </v-icon>
            </template>
         </v-text-field>
        </v-col>
      </v-row>
      <v-card-actions>
          <v-btn
              class="mx-auto"
              type="submit"
              size="large"
              color="blue"
              variant="flat"
              @click="onSearch"
          >
              Rechercher
          </v-btn>
      </v-card-actions>
    </v-container>
</template>
<style scoped>

</style>