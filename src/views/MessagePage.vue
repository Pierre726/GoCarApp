<script setup>
import {onMounted, ref} from 'vue'
import axios from 'axios'
import {useMeStore} from '../stores/auth.store'
import {useRoute} from 'vue-router'
import {
    mdiSend, 
    mdiMicrophone,
    mdiMagnify, mdiDotsVertical, mdiCamera} from '@mdi/js'

let receiver=ref()
const auth= useMeStore()
let messags=ref([])
let user=ref()
let conversation_id=ref()
let conversationId=ref()
let messag=ref('')
let messages=ref([
    {
      avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
    }
])

//   return author.books.length > 0 ? 'Yes' : 'No'

const url='http://localhost:8000/api/chatRoom'

const route=useRoute()

const config= {
  headers:{
    Authorization:'Bearer ' + localStorage.getItem('token')
  }
}
receiver.value=route.params.user_id

onMounted(()=>{
  auth.me()
  console.log(auth.user)
    getUser()
    buildChat()
})

function getUser(){
  axios
  .get('http://localhost:8000/api/user/' + route.params.user_id, config)
  .then(
    (reponse) => {
      console.log(reponse)
      user.value=reponse.data.data.name
    }
  )
} 

function  buildChat(){
    axios
  .post(url, {
    "receiver": receiver.value
  },config)
  .then((response)=>{
    console.log(response.data.others.id)
    conversationId.value=response.data.others.id
  }
  )
  .catch(error=> {
    console.log(error)
  })
}

function  sendMessage(){
    conversation_id.value=conversationId.value
    axios
  .post('http://localhost:8000/api/chat', {
    "conversationId": conversation_id.value,
    "message": messag.value,
  },config)
  .then((reponse)=>{
    console.log(reponse.data)
    messags.value=reponse.data.messages
  }
  )
  .catch(error=> {
    console.log(error)
  })
  clearMessage()
  addMessage()
}

function addMessage(messag){
  messags.value.push({ messag })
}

function  clearMessage () {
    messag.value = ''
}

// window.Echo.private('chatRoom')
//     .listen('MessageSent', (e) => {
//       console.log(e);
//     });

</script>

<template>
  <center class="ma-16 mb-16" v-if="auth.user.isLoading"><v-progress-circular indeterminate :size="67" :width="6" ></v-progress-circular></center>
    <div v-else>
    <v-card
      v-for="(message, i) in messages"
      :key="i"
      hide-actions
      theme="grey-lighten-4"
      class="mx-auto"
      elevation="8"
      style="max-width: 800px;"
      rounded="lg"
    >
        <v-toolbar density="compact">
        <v-row>
          <v-col
            cols="5"
            sm="2"
            md="1"
          >
            <v-avatar
              size="36px"
            >
              <v-img
                v-if="message.avatar"
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              ></v-img>
            </v-avatar>
          </v-col>
          
          <v-col
            class="hidden-xs-only text-left ms-2"
            sm="5"
            md="3"
          >
            <strong>{{ user }}</strong>
          </v-col>
            </v-row>

            <v-spacer></v-spacer>

            <v-btn icon>
             <v-icon :icon="mdiMagnify"/>
            </v-btn>

            <v-btn icon>
             <v-icon :icon="mdiDotsVertical"/>
            </v-btn>
        </v-toolbar> 

        <br><br>

        <v-chip>
          {{ messags.message }}
        </v-chip>
        
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

          <v-form>
            <v-container>
            <v-row>
                <v-col cols="12">
                <v-text-field
                    v-model="messag"
                    :append-icon="messag ? mdiSend : mdiMicrophone"
                    :prepend-icon="mdiCamera"
                    variant="outlined"
                    label="Message"
                    type="text"
                    @click:append="sendMessage"
                ></v-text-field>
                </v-col>
            </v-row>
            </v-container>
        </v-form>
    </v-card>
  </div>
</template>