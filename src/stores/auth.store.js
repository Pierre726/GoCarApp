import {reactive} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'

export const useMeStore=defineStore('me', ()=>{
    const user=reactive({
        data:null,
        isLoading:false,
        error:null
    })

    function me(){
        user.isLoading=true
        const config={
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('token')
            }
        };
        const url="http://localhost:8000/api/me";

        axios
        .get(url, config)
        .then(response=>{
            user.data=response.data
            user.isLoading=false
        })
        .catch(error=>{
            user.error=error
        })
    }
    return {user, me}
})