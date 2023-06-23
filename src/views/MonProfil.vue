<script setup>
import {onMounted} from 'vue'
// import axios from 'axios'
import {useMeStore} from '../stores/auth.store'

const auth= useMeStore()


onMounted(()=>{
    auth.me()
    console.log(auth.user)
})

</script>

<template>
  <center class="ma-16 mb-16" v-if="auth.user.isLoading"><v-progress-circular indeterminate :size="67" :width="6" ></v-progress-circular></center>
    <v-container v-else>
        <center>
            <v-avatar size="100px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              ></v-img>
            </v-avatar>
        </center>
        <v-text-field 
        label="Nom"
        variant="text"
        >
            {{ auth.user.data.name }}
        </v-text-field>
    </v-container>
</template>