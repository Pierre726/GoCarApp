<script setup>
import {ref} from 'vue'
import {
  openKkiapayWidget,
//   addKkiapayListener,
//   removeKkiapayListener,
} from "kkiapay";

let montant=ref('')
let numero=ref('')

function  open() {
    openKkiapayWidget({
     amount: montant.value,
     api_key: "ea2090f0039411eeae3e0377b2ffdca0",
     sandbox: true,
     phone: numero.value,
    })
}
</script>
<template>
    <v-container style="max-width: 500px;">
        <h2 class="text-center">Numéro mobile money</h2>
        <v-text-field
        v-model="numero"
        required
        variant="solo"
        >
        </v-text-field>
        <h2 class="text-center">Montant du trajet</h2>
        <v-text-field
        v-model="montant"
        required
        variant="solo"
        >
        </v-text-field>
     <v-btn class="d-flex justify-center align-center w-100" type="submit" color="primary" @click="open">Continuer</v-btn>
    </v-container>
</template>