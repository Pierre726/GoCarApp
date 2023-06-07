<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {mdiPlus, mdiMinus} from '@mdi/js'

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
    <v-container style="max-width: 600px;">
        <h1 class="text-center text-h3 pb-4">Où allez-vous?</h1>
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

        <div class="d-flex justify-space-around align-center py-4">
            <v-btn
                variant="text"
                :icon="mdiMinus"
                @click="decrement"
            ></v-btn>
     
            <v-text-field
                v-model="nbrPassager"
                color="primary"
                label=""
                required
                placeholder=""
                variant="flat"
            ></v-text-field>
        
            <v-btn
                variant="text"
                :icon="mdiPlus"
                @click="increment"
            ></v-btn>
        </div>

        
         <v-btn 
            block
            class="mb-8"
            color="blue"
            size="large"
            variant=""
            @click="onSearch"
         >
            Rechercher
         </v-btn>
        
    </form>
</v-container>
</template>
<style scoped>
.back{
    background-image:-web;
}
</style>