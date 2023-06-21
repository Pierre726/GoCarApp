<script setup>
import { mdiCheckCircle } from '@mdi/js'
import {
  RouterLink,
  useRoute} from 'vue-router'

let route = useRoute()

</script>

<template>
    <v-sheet
      elevation="12"
      max-width="600"
      rounded="lg"
      width="100%"
      class="pa-4 text-center mx-auto"
    >
      <v-icon
        class="mb-5"
        color="success"
        :icon="mdiCheckCircle"
        size="112"
      ></v-icon>
  
      <h2 class="text-h5 mb-6">Votre trajet a été publié avec succès</h2>
  
      <p class="mb-4 text-medium-emphasis text-body-2">
        Pour avoir une vue globale, cliquez <RouterLink :to="{ name: 'trajets', params: { user_id: route.params.user_id }}"
        class="text-decoration-none text-info">Mes trajets.</RouterLink>
      </p>
  
      <v-divider class="mb-4"></v-divider>
  
      <div class="text-end">
        <RouterLink to="/protected-page"><v-btn
          class="text-none"
          color="success"
          rounded
          variant="flat"
          width="90"
        >
          Fermer
        </v-btn></RouterLink> 
      </div>
    </v-sheet>
  </template>