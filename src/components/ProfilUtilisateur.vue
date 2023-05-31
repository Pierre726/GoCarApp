<script setup>
import {mdiAccount, mdiCash, mdiLogoutVariant, mdiWidgets, mdiBellOutline, mdiAccountOutline, mdiMessageText} from '@mdi/js'
</script>

<template>
    <v-container
    fluid
  >
    <v-row>
      <v-menu
        min-width="200px"
        rounded
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
                Vos trajets
              </v-btn>
              <v-divider></v-divider>
              <v-btn
                :prepend-icon="mdiMessageText"
                rounded
                variant="text"
              >
               Messages
              </v-btn>
              <v-divider ></v-divider>
              <v-btn
                :prepend-icon="mdiAccountOutline"
                rounded
                variant="text"
              >
               Profil
              </v-btn>
              <v-divider ></v-divider>
              <v-btn
                :prepend-icon="mdiCash"
                rounded
                variant="text"
              >
               Virements
              </v-btn>
              <v-divider ></v-divider>
              <v-btn
                :prepend-icon="mdiWidgets"
                rounded
                variant="text"
              >
               Paiements et remboursements
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
              <v-btn
                :prepend-icon="mdiLogoutVariant"
                rounded
                variant="text"
              >
               Déconnexion
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
  <slot></slot>
</template>
