<script setup>
import {ref} from 'vue'
import { mdiCog, mdiLogoutVariant, mdiClose} from '@mdi/js'
import {useRouter} from 'vue-router'

let router=useRouter()
let dialog= ref(false)
let notifications=false
let sound=true
let widgets=false


function logOut(){
  let logout=ref(false)
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
  <v-list density="default" nav>
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-list-item 
          :prepend-icon="mdiCog" 
          title="Setting" 
          value="Settings"
          v-bind="props"
        ></v-list-item>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
           <v-icon :icon="mdiClose"></v-icon>
          </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
              <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                variant="text"
                @click="dialog = false"
              >
                Save
              </v-btn>
            </v-toolbar-items>
        </v-toolbar>
          <v-list
            lines="two"
            subheader
          >
            <v-list-subheader>User Controls</v-list-subheader>
            <v-list-item title="Content filtering" subtitle="Set the content filtering level to restrict apps that can be downloaded"></v-list-item>
            <v-list-item title="Password" subtitle="Require password for purchase or use password to restrict purchase"></v-list-item>
          </v-list>
            <v-divider></v-divider>
          <v-list
            lines="two"
            subheader
          >
            <v-list-subheader>General</v-list-subheader>
              <v-list-item title="Notifications" subtitle="Notify me about updates to apps or games that I downloaded">
                <template v-slot:prepend>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </template>
              </v-list-item>
              <v-list-item title="Sound" subtitle="Auto-update apps at any time. Data charges may apply">
                <template v-slot:prepend>
                  <v-checkbox v-model="sound"></v-checkbox>
                </template>
              </v-list-item>
              <v-list-item title="Auto-add widgets" subtitle="Automatically add home screen widgets">
                <template v-slot:prepend>
                  <v-checkbox v-model="widgets"></v-checkbox>
                </template>
              </v-list-item>
          </v-list>
      </v-card>
    </v-dialog>
    
      <v-list-item 
      :prepend-icon="mdiLogoutVariant" 
      title="LogOut" 
      value="Log Out"
      @click="logOut"
      ></v-list-item>
    
  </v-list>

  <slot></slot>

</template>

<style scoped>
.dialog-bottom-transition-enter-active, .dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
</style>