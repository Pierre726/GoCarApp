<script setup>
import {RouterLink} from 'vue-router'
import {ref} from 'vue'

let items= ref([
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
])

let items2= [
  {
    text: `It's New Release Friday`,
    img: 'https://www.jeuneafrique.com/cdn-cgi/image/q=100,f=auto,metadata=none,width=1256,height=628/https://www.jeuneafrique.com/medias/2020/10/22/45994hr_.jpg',
  },
  {
    text: 'Waoh!!!',
    img: 'https://ortb.bj/storage/2021/02/houeyiho.jpg',
  },
  {
    text: 'Un agréable voyage',
    img: 'https://cdn.pixabay.com/photo/2016/11/23/17/24/woman-1853936_1280.jpg',
  },
]

</script>

<template>
  <div class="header">
    <v-card max-width="1000" class="mx-auto">
      <v-layout>
        <v-app-bar
          density="prominent"
          height="50"
        >
          <template v-slot:prepend>
            <h1 class="up">Go<span class="blue">Car</span></h1>
            <div class="d-flex justify-space-around">
              <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="primary"
                    v-bind="props"
                  >
                    Covoiturage
                  </v-btn>
                </template>
              </v-menu>

              <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="primary"
                    v-bind="props"
                  >
                    About-us
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

              <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="primary"
                    v-bind="props"
                  >
                    Contact
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
            <RouterLink to="/login">
              <v-chip
                class="ma-2"
                color="success"
              >
                Sign in
              </v-chip>
            </RouterLink>

            <RouterLink to="/sign-up">
              <v-chip
                class="ma-2"
                color="primary"
              >
                Sign up
              </v-chip>
            </RouterLink>
          </template>
        </v-app-bar>
      </v-layout>
    </v-card>
  </div>
  
  <div class="image">
   <img src="https://cdn.blablacar.com/kairos/assets/images/carpool_blablabus_small-aacb46bde375e3196927..svg"/>
  </div>

  <div>
   <h1>Un vaste choix de trajets à petits prix</h1>
  </div>
  
    <div class="section">
        <h2>Où allez-vous?</h2>
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
                      height="225px"
                      cover
                    >
                      <v-card-title class="text-h6 text-white d-flex flex-column">
                        <div>
                          <p class="ma-0 text-body-1 font-weight-bold">
                            {{ item.text }}
                          </p>
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
        color="grey-lighten-4"
        v-bind="props"
      >
        <v-img
          :aspect-ratio="16/9"
          height="300px"
          cover
          src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
        >
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-blue-darken-2 v-card--reveal text-h2"
              style="height: 100%;"
            >
              A very good price
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
            Une solution économique et iéale pour vos voyages
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<style scoped>
.header{
  position: fixed;
  z-index: 60;
}

.up{
  padding-bottom:10px ;
  font-weight: bold;
}
.image{
  margin: 20px auto;
  padding-top:50px ;
  height: 400px
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


img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
}
</style>
