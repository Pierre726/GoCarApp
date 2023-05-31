<script setup>
import {ref} from 'vue'
import {mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram} from '@mdi/js'
//import {RouterLink} from 'vue-router'

let icons= ref([
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiInstagram,
])
</script>

<template>
    <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
    >
        <div>
         <v-btn
          v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="text"
         ></v-btn>
        </div>

        <v-divider></v-divider>

        <div>
         {{ new Date().getFullYear() }} — <strong>GoCar</strong>
        </div>
    </v-footer>
    <slot></slot>
</template>