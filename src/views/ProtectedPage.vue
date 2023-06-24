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
let items= ref([
  {
    src: 'https://img.freepik.com/photos-premium/personne-utilisant-application-covoiturage-telephone-mobile_746318-1552.jpg?size=626&ext=jpg&ga=GA1.2.1393112986.1685581487&semt=sph',
  },
  {
    src: 'https://img.freepik.com/vecteurs-libre/modele-application-partage-voiture-dessine-main_23-2150257671.jpg?size=626&ext=jpg',
  },
  {
    src: 'https://img.freepik.com/vecteurs-premium/concept-partage-voiture-personnages-main-donnant-cles-voiture_126283-1725.jpg?size=626&ext=jpg&ga=GA1.2.1393112986.1685581487&semt=sph',
  },
  {
    src: 'https://img.freepik.com/vecteurs-libre/homme-affaires-smartphone-loue-voiture-dans-rue-via-service-autopartage-service-autopartage-location-courte-duree-meilleur-concept-alternatif-taxi_335657-2201.jpg?size=626&ext=jpg',
  }
])
// let slides= ref([
//     'First',
//     'Second',
//     'Third',
//     'Fourth',
//     'Fifth',
// ])

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
    <v-app-bar color="grey-lighten-2" name="app-bar" class="justify-center" scroll-behavior="elevate fade-image collapse"
          scroll-threshold="1000"
          image="https://picsum.photos/1920/1080?random"
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
            <div class="d-flex  w-100">
              <h1 class="up">Bienvenue sur Go<span class="blue">Car</span></h1>
            </div>
          </v-app-bar>
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
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <p class="text-h3">Opportunités</p>
                  <h2>Le covoiturage permet des économies sur carburant et transport, encourage les échanges et rencontres, favorisant ainsi les liens sociaux et moments conviviaux.</h2>  
                <a href="/publier-trajet"><v-btn color=green class="ma-3">Publier maintenant</v-btn></a>
                </v-col>
                <v-col cols="12" md="6">
                  <v-carousel
                    cycle
                    cover
                    height="400"
                    hide-delimiter-background
                    :show-arrows="false"
                  > 
                  <v-carousel-item
                    v-for="(item, i) in items"
                      :key="i"
                      :src="item.src"
                    >
                  <!-- <v-sheet
                    :color="items[i]"
        
                    height="100%"
                  >
                  <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">
                      {{ slide }} Slide
                    </div>
                  </div>
                  </v-sheet> -->
                  </v-carousel-item>
                  </v-carousel>
                </v-col>
              </v-row>
            </v-container>
              
              <h1 class="px-4">Découvrez et obtez pour <strong>GoCar</strong>.</h1> 
                <div class="image">
                  <img src="https://cdn.blablacar.com/kairos/assets/images/carpool_blablabus_small-aacb46bde375e3196927..svg"/>
                </div>
            
              <h1 class="px-4">Un vaste choix de trajets à petits prix</h1>
            <section class="section">
              <div class="sectionDiv">
                <article>
                  <h2 class="presentation text-h4">Où allez-vous?</h2>
                      <v-chip-group class="pb-16">
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
          
      <div>
        <TheFooter></TheFooter>
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>
.image{
  margin: 20px 0;
  height: 400px
}

.up{
  font-weight: bold;
  text-transform: capitalize;
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
