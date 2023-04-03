<script lang="ts">
import { defineComponent } from 'vue';

import Home from './views/Home.vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import bg from './assets/bg4.png'

export default defineComponent({
    name: 'App',
    components: { Header, Footer, Home  },
    setup() {
        // const getImageUrl = (img: String) => {
        //     return null
        // }

        return { bg }
    }
})

</script>

<template>
<v-app>
    <Header />
    <v-parallax :src="bg">
        <v-main>
            <router-view />
        </v-main>
        <!-- <Footer /> -->
    </v-parallax>

</v-app>

</template>

<style scoped>
</style>
