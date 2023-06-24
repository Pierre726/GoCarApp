<script setup>
import {RouterLink} from 'vue-router'
import {ref} from 'vue'
import {mdiAccount, mdiMagnify, mdiPlusCircle, mdiMapMarker, mdiEmail, mdiPhone, mdiWhatsapp} from '@mdi/js'
import {mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram} from '@mdi/js'

let  links=ref([
  'Acceuil',
  'Team',
  'Services',
])
let items= ref([
  { title: 'Qui sommes-nous?' },
  { title: 'Contacts' },
  { title: "Comment sa marche" },
])

let items2= [
  {
    text: `Un bon temps pour covoiturer`,
    img: 'https://www.jeuneafrique.com/cdn-cgi/image/q=100,f=auto,metadata=none,width=1256,height=628/https://www.jeuneafrique.com/medias/2020/10/22/45994hr_.jpg',
  },
  {
    text: 'Réduction du CO2 grace à vous',
    img: 'https://ortb.bj/storage/2021/02/houeyiho.jpg',
  },
  {
    text: 'Poste ou recherche, clique et réserve',
    img: 'https://cdn.pixabay.com/photo/2016/11/23/17/24/woman-1853936_1280.jpg',
  },
]

</script>

<template>
  <v-layout> 
  <div class="header">
    
        <v-app-bar
          density="prominent"
          height="50"
        >
          <template v-slot:prepend>
            <h1 class="upper text-h3">Go<span class="blue">Car</span></h1>
            <div class="d-flex justify-space-around">
              <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="up"
                    rounded
                    variant="text"
                    v-bind="props"
                  >
                    <p>Covoiturage</p>
                  </v-btn>
                </template>
              </v-menu>

              <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="up"
                    rounded
                    variant="text"
                    v-bind="props"
                  >
                    <p>Abouts</p>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :value="index"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>

          <template v-slot:append>
            <RouterLink to="/">
                <v-btn
                  class="up"
                  :prepend-icon="mdiMagnify"
                  rounded
                  variant="text"
                >
                <p 
                >Rechercher
                </p>
                </v-btn>
              </RouterLink>

              <RouterLink to="/">
                <v-btn 
                  class="up"
                  :prepend-icon="mdiPlusCircle"
                  rounded
                  variant="text"
                >
                <p 
                >Publier trajet
                </p>
                </v-btn>
              </RouterLink>
            
            <v-container
              fluid
            >
              <v-row>
                <v-menu
                  min-width="200px"
                  rounded
                  open-on-hover
                >
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon
                      v-bind="props"
                    >
                      <v-avatar
                      :icon="mdiAccount"
                        color="grey-lighten-2"
                        size="large"
                      >
                        <!-- <span class="text-h5">{{ user.initials }}</span> -->
                      </v-avatar>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-text>
                      <div class="mx-auto">
                        <v-divider></v-divider>
                        <RouterLink to="/sign-up"> 
                        <v-btn
                          rounded
                          variant="text"
                        >
                        Inscription
                        </v-btn></RouterLink>
                        <v-divider></v-divider>
                        <RouterLink to="/login"> 
                        <v-btn
                          rounded
                          variant="text"
                        >
                        Connexion
                        </v-btn></RouterLink>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-menu>
              </v-row>
            </v-container>
          </template>
        </v-app-bar>
  </div>
  <v-main> 
  <div class="image">
   <img src="https://img.freepik.com/vecteurs-premium/logo-location-voiture-modele-vectoriel-conception-logo-partage-voiture_664675-1584.jpg?size=626&ext=jpg&ga=GA1.1.1393112986.1685581487&semt=sph"/>
  </div>

  <div>
   <h1>Un vaste choix de trajets à petits prix</h1>
  </div>
  
    <div class="section">
        <v-container class="pa-4 text-center">
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <template v-for="(item, i) in items2" :key="i">
              <v-col
                cols="12"
                md="4"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    :elevation="isHovering ? 12 : 2"
                    :class="{ 'on-hover': isHovering }"
                    v-bind="props"
                  >
                    <v-img
                      :src="item.img"
                      height="300px"
                      cover
                    >
                      <v-card-title class="text-body text-white d-flex flex-column">
                        <div>
                          {{ item.text }}
                        </div>
                      </v-card-title>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </template>
          </v-row>
        </v-container>
    </div>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto"
        color="black"
        v-bind="props"
      >
        <v-img
          :aspect-ratio="16/9"
          height="350px"
          cover
          src="https://img.freepik.com/photos-gratuite/voiture-taxi-emplacement-marque-pointeur-pin-smartphone-pour-concept-service-transport-ligne-banniere-web-dessin-anime-icone-symbole-arriere-plan-illustration-3d_56104-1999.jpg?size=626&ext=jpg&ga=GA1.2.1393112986.1685581487&semt=sph"
        >
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-cyan v-card--reveal text-h2"
              style="height: 100%;"
            >
              Des prix incroyables
            </div>
          </v-expand-transition>
        </v-img>

        <v-card-text class="pt-6">
          <div class="font-weight-light text-grey text-h6 mb-2">
            Pour de nouvelles expériences
          </div>

          <h3 class="text-h4 font-weight-light text-orange mb-2">
            GoCar
          </h3>

          <div class="font-weight-light text-h6 mb-2">
            Avec GoCar allez loin à moindre prix. <br> 
            Une solution économique et iéale pour vos voyages.
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>

  
  <div>
  <v-footer class="bg-transparent">
      <div justify="start">
        <span class="text-h4 text-blue">Contacts</span>
        <v-list>
        <v-list-item
            :prepend-icon="mdiPhone"
            title="(229) 67724073"
        ></v-list-item>

        <v-list-item
            :prepend-icon="mdiWhatsapp"
            title="(229) 96085580"
        ></v-list-item>

        <v-list-item
            :prepend-icon="mdiEmail"
            title="gocar@gmail.com"
        ></v-list-item>

        <v-list-item
            :prepend-icon="mdiMapMarker"
            title="Agontikon, FL 79938"
        ></v-list-item>
        </v-list>
      </div>
      
      <v-row justify="center" no-gutters>
        <v-btn
        v-for="link in links"
        :key="link"
        color="black"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>GoCar</strong>
      </v-col>
    </v-row>

    <div justify="end">
        <h2 class="text-h4 text-blue">Réseaux sociaux</h2>
        <v-list>
        <v-list-item
            :prepend-icon="mdiFacebook"
            title="Facebook"
        ></v-list-item>

        <v-list-item
            :prepend-icon="mdiInstagram"
            title="Instagram"
        ></v-list-item>

        <v-list-item
            :prepend-icon="mdiLinkedin"
            title="LinkeDn"
        ></v-list-item>

        <v-list-item
            :prepend-icon="mdiTwitter"
            title="Twitter"
        ></v-list-item>
        </v-list>
    </div>
  </v-footer>
</div>
</v-main>
</v-layout>
</template>

<style scoped>
.header{
  position: fixed;
  z-index: 60;
}

.up{
  text-transform: capitalize;
  color: rgb(45, 45, 137);
}
.image{
  padding-top:10px ;
  height: 600px
}

.section{
  margin: 20px 0;
  padding:5px 10px;
  background-color: rgb(5, 71, 82);
  color: rgb(255, 255, 255);
  display: block;
}

.blue{
  color: rgb(82, 82, 255);
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
.v-card {
    transition: opacity .8s ease-in-out;
  }

.v-card:not(.on-hover) {
  opacity: 0.8;
}

.upper{
  font-weight: bold;
}


img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
}
</style>
