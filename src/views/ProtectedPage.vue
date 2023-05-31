<script setup>
import axios from 'axios'
import MenuCollant from  '../components/MenuCollant.vue'
import ProfilUtilisateur from  '../components/ProfilUtilisateur.vue'
import ButtonBottom from  '../components/ButtonBottom.vue'
import TheFooter from  '../components/TheFooter.vue'
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'
import {mdiChevronLeft, mdiChevronRight, mdiPlusCircle, mdiMagnify} from '@mdi/js'
//import {RouterLink} from 'vue-router'

let isLoading=ref(true)
let infoUser=ref({})
let router=useRouter()
let drawer= ref(true)
let rail=ref(true)
let colors= ref([
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
])
let slides= ref([
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
])

const config= {
  headers:{
  Authorization:'Bearer ' + localStorage.getItem('token')
  }
}
 
const url='http://localhost:8000/api/me'
onMounted(()=>{
 axios 
 .get(url, config) 
 .then((response)=>{
  console.log(response)
  if(response.status === 200){
    isLoading.value= false;
    infoUser.value=response.data;
  }
 })
 .catch(error=> {
  console.log(error)
  router.push({path:'/login'})
 })
})

</script>

<template>
  <center class="ma-16 mb-16" v-if="isLoading"><v-progress-circular indeterminate :size="67" :width="6" ></v-progress-circular></center>
  <v-layout v-else>
    <v-navigation-drawer v-model="drawer" color="grey-ligthen-2" permanent
      :rail="rail"  @click="rail = false">
          <template v-slot:prepend>
            <v-btn
              variant="text"
              :icon="rail ? mdiChevronRight : mdiChevronLeft"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
     <MenuCollant></MenuCollant>
     <template v-slot:append>
      <ButtonBottom></ButtonBottom>
     </template>
    </v-navigation-drawer>
    <v-main>
      <v-app-bar color="grey-lighten-2" name="app-bar" class="justify-center" scroll-behavior="elevate fade-image collapse"
      scroll-threshold="800"
      image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:append>

          <RouterLink to="/search-trajet">
            <v-chip 
              :prepend-icon="mdiMagnify"
              color="white"  
            >
            <p class="up"
            >Rechercher
            </p>
            </v-chip>
          </RouterLink>

          <RouterLink to="/publier-trajet">
            <v-chip 
              :prepend-icon="mdiPlusCircle"
              color="white"  
            >
            <p class="up"
            >Publier trajet
            </p>
            </v-chip>
          </RouterLink>
          <ProfilUtilisateur></ProfilUtilisateur>
        </template>
        <div class="d-flex  w-100">
          <h1 class="up">Welcome on Go<span class="blue">Car</span></h1>
        </div>
      </v-app-bar>

      <div> 
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows="hover"
        > 
        <v-carousel-item
          v-for="(slide, i) in slides"
            :key="i"
          >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
        </v-sheet>
        </v-carousel-item>
        </v-carousel>
          
        <div class="image">
          <img src="https://cdn.blablacar.com/kairos/assets/images/carpool_blablabus_small-aacb46bde375e3196927..svg"/>
        </div>

        <div>
          <h1>Un vaste choix de trajets à petits prix</h1>
        </div>
        
        <section class="section">
          <div class="sectionDiv">
            <article>
              <h2 class="presentation">Où allez-vous?</h2>
                  <v-chip-group class="pa-9">
                    <v-chip class="py-8">Calavi --> Cotonou</v-chip>
                    <v-chip class="py-8">Calavi --> Lomé</v-chip>
                    <v-chip class="py-8">Cotonou --> Parakou</v-chip>
                    <v-chip class="py-8">Cotonou --> Ghana</v-chip>
                    <v-chip class="py-8">Calavi --> Abomey</v-chip>
                    <v-chip class="py-8">Porto-Novo --> Malanville</v-chip>
                  </v-chip-group>
            </article>
          </div>
        </section>
        <TheFooter></TheFooter>
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>
.image{
  margin: 30px 0;
  height: 300px
}

.up{
  font-weight: bold;
}

.section{
  padding: 0px 24px;
  background-color: rgb(5, 71, 82);
  color: rgb(255, 255, 255);
  display: block;
}

.sectionDiv{
  margin-left: auto;
  margin-right: auto;
  max-width: 1016px;
  display: block;
  color: rgb(255, 255, 255);
}

.presentation{
  color: var(--g43xpla);
  padding: 24px 0px;
  font: var(--g43xpl4l);
  white-space: pre-line;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  display: block;
}

.blue{
  color: rgb(82, 82, 255);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
}

article{
  display: block;
}

span{
  font-weight: bold;
}
</style>
