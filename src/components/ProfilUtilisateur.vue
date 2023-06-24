<script setup>
import {mdiAccount, mdiCash, mdiLogoutVariant, mdiBellOutline, mdiAccountOutline, mdiMessageText} from '@mdi/js'
import {ref} from 'vue'
import {useRouter, RouterLink} from 'vue-router'

let router=useRouter()

let logout=ref(false)

function logOut(){
  const config= {
    headers:{
    Authorization:'Bearer ' + localStorage.removeItem('token')
    }
  }

  if (logout.value === true){
    return config,

    router.push({path:'/login'})
  }
}
</script>

<template>
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
              color="brown"
              size="large"
            >
              <!-- <span class="text-h5">{{ user.initials }}</span> -->
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto">
             
              <v-btn
                rounded
                variant="text"
              >
                Mes trajets
              </v-btn>
              <v-divider></v-divider>
              <a href="/contacts"><v-btn
                :prepend-icon="mdiMessageText"
                rounded
                variant="text"
              >
               Contactez-nous
              </v-btn></a>
              <v-divider ></v-divider>
              <a href="/mon-profil"><v-btn
                :prepend-icon="mdiAccountOutline"
                rounded
                variant="text"
              >
               Profil
              </v-btn></a>
              <v-divider ></v-divider>
              <v-btn
                :prepend-icon="mdiCash"
                rounded
                variant="text"
              >
               Mes historiques de transactions
              </v-btn>
              <v-divider ></v-divider>
              <v-btn
                :prepend-icon="mdiBellOutline"
                rounded
                variant="text"
              >
               Notifications
              </v-btn>
              <v-divider class=""></v-divider>
              <RouterLink to="/login"><v-btn
                :prepend-icon="mdiLogoutVariant"
                rounded
                variant="text"
                @click="logOut"
              >
               Déconnexion
              </v-btn></RouterLink>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
  <slot></slot>
</template>
