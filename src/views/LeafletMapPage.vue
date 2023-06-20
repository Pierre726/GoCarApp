
<script setup>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {onMounted} from 'vue'

onMounted(()=>{
  const map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([51.5, -0.09]).addTo(map).bindPopup('A marker!');
})

</script>

<template>
  <div id="map" style="height: 400px;"></div>
</template>