<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'
import { mdiEmailOutline, mdiLockOutline, mdiEyeOff, mdiEye } from '@mdi/js'

let router = useRouter() 
let email=ref('')
let password=ref('')
let visible=ref(false)

async function submit(){
  console.log(email.value, password.value)
  await axios
  .post('http://localhost:8000/api/login', {
      "email": email.value,
      "password": password.value
    }) 
  .then((response)=>{
      localStorage.setItem('token', response.data.token);
      router.push({path:'/protected-page'});
  })
  .catch(error=> console.log(error));
}

</script>

<template>
      <div class="d-flex justify-center align-center w-100">
        <h1>Bienvenue sur GoCar</h1>
      </div>
      <div>
        <v-row>
          <v-col cols="7">
            <p class="text-body-1">Une solution idéale pour vos déplacements. Non seulement vous faites des économies mais vous gagnez également en temps.</p>
            <v-img
              class="mx-auto"
              max-width="500"
              src="https://img.freepik.com/vecteurs-libre/illustration-concept-abstrait-service-autopartage_335657-3739.jpg?size=626&ext=jpg&ga=GA1.1.1393112986.1685581487&semt=sph"
            ></v-img>
          </v-col>
          <v-col cols="5">
            <v-card
              class="pa-12 pb-8"
              elevation="8"
              max-width="448"
              rounded="lg"
            >
            <div class="d-flex justify-center align-center w-100">
              <h2 class="text-h6 text-lg-h5 text-teal">Log into GoCar</h2>
            </div>
          
              <div class="text-subtitle-1 text-medium-emphasis">Account</div>
          
              <v-text-field
                v-model="email"
                density="compact"
                placeholder="Email address"
                :prepend-inner-icon="mdiEmailOutline"
                variant="outlined"
              ></v-text-field>
          
              <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password
          
                <RouterLink to="/change-password"
                  class="text-caption text-decoration-none text-blue"
                  rel="noopener noreferrer"
                >
                  Forgot login password?</RouterLink>
              </div>
          
              <v-text-field
                v-model="password"
                :append-inner-icon="visible ? mdiEyeOff : mdiEye"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Enter your password"
                :prepend-inner-icon="mdiLockOutline"
                variant="outlined"
                @click:append-inner="visible = !visible"
              ></v-text-field>
          
              <v-card
                class="mb-12"
                color="surface-variant"
                variant="tonal"
              >
                <!-- <v-card-text class="text-medium-emphasis text-caption">
                  Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
                </v-card-text> -->
              </v-card>
                <v-btn
                block
                class="mb-8"
                color="blue"
                size="large"
                variant="tonal"
               @click="submit">
                Log In
              </v-btn>
              
          
              <v-card-text class="text-center">
                <RouterLink to="/sign-up" 
                class="text-blue text-decoration-none"
                rel="noopener noreferrer"
                >
                  Sign up now 
              </RouterLink>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
</template>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  top: -10px;
}
</style>
