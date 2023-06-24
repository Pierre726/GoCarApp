<script setup>
import ProfilUtilisateur from  '../components/ProfilUtilisateur.vue'
import {mdiPlusCircle, mdiMagnify, mdiMapMarker, mdiEmail, mdiPhone, mdiWhatsapp} from '@mdi/js'
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

  const initialState = {
    name: '',
    email: '',
    firstname:'',
    message:'',
    checkbox: null,
  }

  const state = reactive({
    ...initialState,
  })

  const rules = {
    name: { required },
    email: { required, email },
    firstname: { required },
    message: { required },
    checkbox: { required },
  }

  const v$ = useVuelidate(rules, state)

</script>

<template>
    <v-layout>
        <v-main>
            <v-app-bar color="transparent" density="prominent"
          height="30"
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
            <a href="/protected-page">
                <div class="d-flex  w-100">
                 <h1 class="up">Go<span class="blue">Car</span></h1>
                </div>
            </a>
          </v-app-bar>
            <v-container>
                <v-card-title>
                    <span class="text-h4 text-blue">Contacts</span>
                </v-card-title>
                <div class="d-flex justify-start">
        
                <v-list>
                <v-list-item
                    :prepend-icon="mdiPhone"
                    title="(229) 67724073"
                ></v-list-item>

                <v-divider inset></v-divider>

                <v-list-item
                    :prepend-icon="mdiWhatsapp"
                    title="(229) 96085580"
                ></v-list-item>
                
                <v-divider inset></v-divider>

                <v-list-item
                    :prepend-icon="mdiEmail"
                    title="gocar@gmail.com"
                ></v-list-item>

                <v-divider inset></v-divider>

                <v-list-item
                    :prepend-icon="mdiMapMarker"
                    title="Agontikon, FL 79938"
                ></v-list-item>
                </v-list>
            </div>
            <div>
                <form>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field
                             v-model="state.name"
                             :error-messages="v$.name.$errors.map(e => e.$message)"
                             :counter="10"
                             label="Nom"
                             required
                             @input="v$.name.$touch"
                             @blur="v$.name.$touch"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                             v-model="state.firstname"
                             :error-messages="v$.firstname.$errors.map(e => e.$message)"
                             :counter="10"
                             label="Prénoms"
                             required
                             @input="v$.firstname.$touch"
                             @blur="v$.firstname.$touch"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    
                    <v-text-field
                    v-model="state.email"
                    :error-messages="v$.email.$errors.map(e => e.$message)"
                    label="E-mail"
                    required
                    @input="v$.email.$touch"
                    @blur="v$.email.$touch"
                    ></v-text-field>

                    <v-text-field
                    v-model="state.message"
                    :error-messages="v$.message.$errors.map(e => e.$message)"
                    label="Message"
                    required
                    @input="v$.message.$touch"
                    @blur="v$.message.$touch"
                    ></v-text-field>

                    <v-checkbox
                    v-model="state.checkbox"
                    :error-messages="v$.checkbox.$errors.map(e => e.$message)"
                    label="Do you agree?"
                    required
                    @change="v$.checkbox.$touch"
                    @blur="v$.checkbox.$touch"
                    ></v-checkbox>

                    <v-btn
                    class="mx-auto"
                    @click="v$.$validate"
                    color="green"
                    size="large"
                    >
                    Envoyer
                    </v-btn>
                </form>
            </div>
            </v-container>
        </v-main>
    </v-layout>
</template>

<style scoped>
.up{
  font-weight: bold;
  text-transform: capitalize;
}

.blue{
  color: rgb(82, 82, 255);
}

span{
  font-weight: bold;
}
</style>