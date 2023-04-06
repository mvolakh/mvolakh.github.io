<script lang="ts">
import { defineComponent, ref } from 'vue';

import Home from './views/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import TechnologyType from './types/TechnologyType'

import bg from './assets/bg4.png'

export default defineComponent({
    name: 'App',
    components: { Header, Footer, Home  },
    setup() {
        const technologies = ref<TechnologyType[]>([
        {
          name: 'Typescript',
          desc: '',
          img: 'mdi-language-typescript'
        },
        {
          name: 'Node + Express.js',
          desc: '', 
          img: 'mdi-nodejs'
        },
        {
          name: 'MongoDB/SQL',
          desc: '',
          img: 'mdi-database'
        },
        {
          name: 'Vue3',
          desc: 'Working with CompositionAPI. Mostly using Vuetify as a frontend library.',
          img: 'mdi-vuejs'
        }
      ]);
        return { bg, technologies }
    }
})
</script>

<template>
<v-app>
    <Header />
    <v-parallax :src="bg">
    <v-main>
        <router-view v-slot="{ Component }" :technologies="technologies">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </v-main>
    </v-parallax>
</v-app>
</template>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
