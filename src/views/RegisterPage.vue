<script setup>
  import {ref} from 'vue'
  import axios from 'axios'
  import {useRouter} from 'vue-router'
  import {mdiPaperclip, mdiEye, mdiEyeOff} from '@mdi/js'

  let name=ref("")
  let telephone=ref()
  let adress=ref("")
  let email=ref("")
  let carte_grise=ref() 
  let num_permis=ref()   
  let date_emission_permis=ref()
  let date_expiration_permis=ref()
  let photo_permis=ref()
  let num_identite=ref()
  let date_emission_identite=ref()
  let date_expiration_identite=ref()
  let photo_identite=ref()
  let annee_experience_conducteur=ref()
  let countries= ref(['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'])
  let country=ref('')
  let code_postal=ref()
  let password=ref("")
  let router= useRouter() 
  let show1=ref(false)

  let rules= {
    email: v => !!(v || '').match(/^(?=.*[a-z])(?=.*@)(?=.*[a-z])(?=.*(\.[a-z])).+$/) || 'Please enter a valid email',
    length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
    password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
      'Password must contain an upper case letter, a numeric character, and a special character',
    required: v => !!v || 'This field is required', 
    names:  v => !!(v || '').match(/^(?=.*[A-Z])(?=.*[a-z]).+$/) || 
      'Your name must begin with upper case letter A-Z',
  }

  function onSubmit(){
    console.log(name.value, email.value, adress.value, telephone.value, country.value, code_postal.value, password.value)
    axios
    .post('http://localhost:8000/api/register', {
      "name": name.value,
      "email": email.value,
      "password": password.value,
      "adress": adress.value,
      "code_postal": code_postal.value,
      "country": country.value,
      "telephone": telephone.value,
      "carte_grise":carte_grise.value,
      "num_permis":num_permis.value,
      "date_emission_permis":date_emission_permis.value,
      "date_expiration_permis":date_expiration_permis.value,
      "photo_permis":photo_permis.value,
      "num_identite":num_identite.value,
      "date_emission_identite":date_emission_identite.value,
      "date_expiration_identite":date_expiration_identite.value,
      "photo_identite":photo_identite.value,
      "annee_experience_conducteur":annee_experience_conducteur.value
    })
    .then(
      (response)=>{
        console.log(response);
        if(response.status === 200 || response.status === 201){
          router.push({path:'/login'});
        }
      }
    )
    .catch(error=> console.log(error));
  }
</script>


<template>
  <div class="bigdiv">
    <v-card
    class="mx-n16 pa-8 pb-6"
    elevation="8"
    style="max-width: 500px;"
    title="Create account"
    >
    <form>
      <div>
        <v-text-field
          v-model="name"
          :rules="[rules.names]"
          color="primary"
          label="Name"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="[rules.email]"
          color="primary"
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="adress"
          color="primary"
          label="Adress"
        ></v-text-field>

        <v-text-field
          v-model="code_postal"
          :rules="[() => !!code_postal || 'This field is required']"
          label="ZIP / Postal Code"
          required
          placeholder="00229"
        ></v-text-field>

        <v-text-field
          v-model="telephone"
          :rules="[() => !!telephone || 'This field is required']"
          color="primary"
          label="Telephone"
          required
          placeholder="99973840"
        ></v-text-field>

        <v-autocomplete
          v-model="country"
          :rules="[() => !!country || 'This field is required']"
          :items="countries"
          label="Country"
          required
        ></v-autocomplete>

        <v-text-field
          v-model="password"
          :append-inner-icon="show1 ? mdiEyeOff : mdiEye"
          :rules="[rules.password, rules.length(8)]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          counter
          @click:append-inner="show1 = !show1"
        ></v-text-field>
      </div>

      <div>
        <h2>Autres informations(conducteur)</h2>
        <v-text-field
          v-model="num_permis"
          :rules="[() => !!num_permis || 'This field is required']"
          color="primary"
          label="N°Permis"
          required
          placeholder="99973840"
        ></v-text-field>

        <v-text-field
          v-model="date_emission_permis"
          :rules="[() => !!date_emission_permis || 'This field is required']"
          color="primary"
          label="Date d'émission du permis"
          required
          placeholder="aaaa:mm:jj"
        ></v-text-field>

        <v-text-field
          v-model="date_expiration_permis"
          :rules="[() => !!date_expiration_permis || 'This field is required']"
          color="primary"
          label="Date d'expiration du permis"
          required
          placeholder="aaaa:mm:jj"
        ></v-text-field>

        <v-text-field
          v-model="annee_experience_conducteur"
          color="primary"
          label="Nombre d'année d'expérience en tant que conducteur"
        ></v-text-field>

        <v-file-input
          v-model="photo_permis"
          color="deep-purple-accent-4"
          counter
          label="Photo du permis"
          multiple
          placeholder="Select your files"
          :prepend-icon="mdiPaperclip"
          :show-size="1000"
        >
          <template v-slot:selection="{ fileNames }">
            <template v-for="(fileName, index) in fileNames" :key="fileName">
              <v-chip
                v-if="index < 2"
                color="deep-purple-accent-4"
                label
                size="small"
                class="me-2"
              >
                {{ fileName }}
              </v-chip>

              <span
                v-else-if="index === 2"
                class="text-overline text-grey-darken-3 mx-2"
              >
                +{{ files.length - 2 }} File(s)
              </span>
            </template>
          </template>
        </v-file-input>
      </div>
      
      <div>
        <h2>Autres informations(propriétaire)</h2>
        <v-text-field
          v-model="carte_grise"
          :rules="[() => !!carte_grise || 'This field is required']"
          color="primary"
          label="Carte grise"
          required
          placeholder="99973840"
        ></v-text-field>

        
        <v-text-field
          v-model="num_identite"
          :rules="[() => !!num_identite || 'This field is required']"
          color="primary"
          label="Numéro de la pièce fournir"
          required
          placeholder="99973840"
        ></v-text-field>

        <v-text-field
          v-model="date_emission_identite"
          :rules="[() => !!date_emission_identite || 'This field is required']"
          color="primary"
          label="Date d'émission de la pièce"
          required
          placeholder="aaaa:mm:jj"
        ></v-text-field>

        <v-text-field
          v-model="date_expiration_identite"
          :rules="[() => !!date_expiration_identite || 'This field is required']"
          color="primary"
          label="Date d'expiration de la pièce"
          required
          placeholder="aaaa:mm:jj"
        ></v-text-field>


        <v-file-input
          v-model="photo_identite"
          color="deep-purple-accent-4"
          counter
          label="Photo de la pièce fournir"
          multiple
          placeholder="Select your files"
          :prepend-icon="mdiPaperclip"
          :show-size="1000"
        >
          <template v-slot:selection="{ fileNames }">
            <template v-for="(fileName, index) in fileNames" :key="fileName">
              <v-chip
                v-if="index < 2"
                color="deep-purple-accent-4"
                label
                size="small"
                class="me-2"
              >
                {{ fileName }}
              </v-chip>

              <span
                v-else-if="index === 2"
                class="text-overline text-grey-darken-3 mx-2"
              >
                +{{ files.length - 2 }} File(s)
              </span>
            </template>
          </template>
        </v-file-input>
      </div>
    </form>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn 
      block
      class="mb-8"
      color="success"
      size="large"
      variant=""
      @click="onSubmit"
      >
        Submit
      </v-btn>
    </v-card-actions>
    </v-card>
  </div>
  
</template>
 
<style scoped>
  .bigdiv{
    margin: 0 35%;
  }
</style>

