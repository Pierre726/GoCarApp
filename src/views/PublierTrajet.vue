<script setup>
import { ref } from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'

let router = useRouter()
let numPermis = ref()
let immatriculation = ref('')
let conditions = ref('')
let items = ref([
  'Animaux de compagnie',
  'Climatisation',
  "Nombre de place à l'arrière",
])
// let form=ref('')
let photoPermis=ref([])
let depart= ref('')
let destination=ref('')
let dateTrajet=ref()
let heureDepart=ref()
let nbrPassager=ref()
let prix=ref()

const config= {
  headers:{
    Authorization:'Bearer ' + localStorage.getItem('token')
  }
}


function submit(){
  console.log(depart.value, destination.value, dateTrajet.value, heureDepart.value, nbrPassager.value, prix.value, conditions.value, numPermis.value, immatriculation.value)
  axios
  .post('http://localhost:8000/api/publier', {
      "depart": depart.value,
      "destination": destination.value,
      "dateTrajet": dateTrajet.value,
      "heureDepart": heureDepart.value,
      "nbrPassager": nbrPassager.value,
      "prix": prix.value,
      "conditions": conditions.value,
      "numPermis": numPermis.value,
      "immatriculation": immatriculation.value,
  }, config) 
  .then((response)=>{
      console.log(response)
      if(response.status==200){
        router.push({name:'publication', params: {user_id: response.data.trajet.user_id}})
      }
    }
  )
  .catch(error=> {
    console.log(error)
  })
  
}

</script>

<template>
    <v-layout> 
      <v-main> 
        <v-app-bar color="cyan-lighten-5" class="justify-center">
          <div class="d-flex justify-center align-center w-100">
            <h1>Publier un trajet</h1>
          </div>
        </v-app-bar> 
        <v-container >
        <!-- <v-form v-model="form">  -->
         <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="depart"
              label=""
              placeholder="Lieu de départ"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="destination"
              label=""
              placeholder="Destination"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="dateTrajet"
              label="Date du Trajet"
              placeholder="ex: aaaa:mm:jj"
            ></v-text-field>
          </v-col>
         </v-row>
          <v-text-field
            v-model="heureDepart"
            label="Heure de départ"
            placeholder="ex: 14:00"
          ></v-text-field>
         <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="nbrPassager"
              label=""
              placeholder="Nombre de passager"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="prix"
              label=""
              placeholder="Prix par place"
            ></v-text-field>
          </v-col>
         </v-row>
         <v-row>
          <v-col cols="8">
            <v-select
              v-model="conditions"
              :items="items"
              label="Autres conditions"
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="immatriculation"
              :counter="7"
              label=""
              placeholder="Immatriculation du véhicule"
            ></v-text-field>
          </v-col>
         </v-row>
         <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="numPermis"
              :counter="10"
              label=""
              placeholder="N°Permis de Conduire"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-file-input
              v-model="photoPermis"
              placeholder="Upload your documents"
              label="Photo du Permis"
              multiple
              :prepend-icon="mdiPaperclip"
            >
              <template v-slot:selection="{ fileNames }">
                <template v-for="fileName in fileNames" :key="fileName">
                  <v-chip
                    size="small"
                    label
                    color="primary"
                    class="me-2"
                  >
                    {{ fileName }}
                  </v-chip>
                </template>
              </template>
            </v-file-input>
          </v-col>
         </v-row>

         <v-divider></v-divider>
          <v-card-actions>
          <v-btn
            class="mx-auto"
            color="success"
            size="large"
            variant="flat"
            type="submit"
            @click="submit"
          >
            Publier
          </v-btn>
          </v-card-actions>
        <!-- </v-form> -->
         
        </v-container>
      
      </v-main>
    </v-layout>
</template>

<style scoped>
/* *{
    background-image: url("@/assets/main.jpg");
  } */ 
</style>