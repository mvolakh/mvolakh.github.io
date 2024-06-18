<script setup lang="ts">
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Languages from '../components/Languages.vue';
import Projects from '../components/Projects.vue';
import Footer from '../components/Footer.vue';
import Cat from '../components/Cat.vue'
// import { useDisplay } from 'vuetify';

// const { mobile } = useDisplay();
</script>

<template>
<v-container>
    <v-row>
        <v-spacer></v-spacer>
        <!-- <v-col id="wrapper" cols="12" lg="8" md="10"> -->
        <v-col id="wrapper" cols="12" xl="8">
            <About/>
            <Skills/>
            <Languages/>   
            <Projects/>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</v-container>
<Footer/>
<Cat/>

<!-- <v-fab color="white" variant="outlined" icon="mdi-lightbulb" v-show="!mobile"></v-fab> -->
</template>

<style scoped>
.v-fab {
    position: fixed;
    bottom: 8%;
    right: 5%;
}

.cat {
    position: fixed;
    bottom: 3%;
    left: 3%;
    height: 36px;
    width: 36px;
    z-index: 1000;
}
</style>
