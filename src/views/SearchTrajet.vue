<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import ProfilUtilisateur from  '../components/ProfilUtilisateur.vue'
import {mdiPlusCircleOutline, mdiMinusCircleOutline, mdiPlusCircle, mdiMagnify} from '@mdi/js'

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
    <v-layout>
        <v-main>
    <v-app-bar color="transparent" density="prominent"
          height="30"
          >
            <template v-slot:append>
              <RouterLink to="/search-trajet">
                <v-btn
                  :prepend-icon="mdiMagnify"
                  color=""  
                  class="up"
                  rounded
                >
                <p 
                >Rechercher
                </p>
                </v-btn>
              </RouterLink>

              <RouterLink to="/publier-trajet">
                <v-btn 
                  :prepend-icon="mdiPlusCircle"
                  color=""
                  class="up"  
                  rounded
                >
                <p 
                >Publier trajet
                </p>
                </v-btn>
              </RouterLink>
              <ProfilUtilisateur></ProfilUtilisateur>
            </template>
            <a href="/protected-page">
                <div class="d-flex  w-100">
                 <h1 class="up">Go<span class="blue">Car</span></h1>
                </div>
            </a>
          </v-app-bar>
    <v-container>
     <h1 class="text-center text-h3 pb-4">Où allez-vous?</h1>

     <v-card
      hide-actions
      theme="grey-lighten-4"
      class="mx-auto"
      elevation="8"
      style="max-width: 1000px;"
      rounded="lg"
    >
    <v-row no-gutters>
        <v-col cols="5">
            <v-autocomplete
             v-model="depart"
             color="primary"
             :items="villes"
             placeholder="Départ"
             variant="text"
            ></v-autocomplete>
        </v-col>
        <v-divider vertical></v-divider>

        <v-col cols="5">
            <v-autocomplete
               v-model="destination"
               color="primary"
               :items="villes"
               placeholder="Destination"
               variant="text"
            ></v-autocomplete>
        </v-col>
        <v-divider vertical></v-divider>

        <v-col cols="2">
            <v-text-field
             v-model="nbrPassager"
             class="px-0"
             variant="text"
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
    </v-card>
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
 </v-main>
</v-layout>
</template>
<style scoped>
.up{
  font-weight: bold;
  text-transform: capitalize;
}

.blue{
  color: rgb(82, 82, 255);
}

span{
  font-weight: bold;
}
</style>