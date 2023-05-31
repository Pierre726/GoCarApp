<script setup>
 import { mdiHome, mdiAccountCircleOutline, mdiPlusCircle } from '@mdi/js'
</script>

<template>
    <slot name="menuCollant">
        <v-list density="default" nav>
            <RouterLink to="/protected-page"><v-list-item :prepend-icon="mdiHome" title="Home" value="Home"></v-list-item></RouterLink>
            <RouterLink to=""><v-list-item :prepend-icon="mdiAccountCircleOutline" title="User" value="User"></v-list-item></RouterLink>
            <RouterLink to="/publier-trajet"><v-list-item :prepend-icon="mdiPlusCircle" title="Publier trajet" value="Publier trajet"></v-list-item></RouterLink>
        </v-list>
    </slot>
</template>