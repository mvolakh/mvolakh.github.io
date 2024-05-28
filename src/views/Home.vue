<script setup lang="ts">
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Footer from '../components/Footer.vue';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
</script>

<template>
<!-- <v-container>
    <v-row>
        <v-spacer></v-spacer>
        <v-col id="wrapper" cols="12" lg="8" md="10">
            <About/>
            <Skills/>
            <Projects/>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</v-container>
<Footer/>
<v-fab color="white" variant="outlined" icon="mdi-lightbulb" v-show="!mobile"></v-fab> -->
<v-container fluid class="fill-height">
    <v-row>
    <v-col class="d-flex flex-column justify-center align-center">
        <h1>¯\_(ツ)_/¯</h1>
        <p>New version is coming soon</p>
        <p>29.05</p>
    </v-col>
    </v-row>
</v-container>
</template>

<style scoped>
.v-fab {
    position: fixed;
    bottom: 8%;
    right: 5%;
}
</style>
