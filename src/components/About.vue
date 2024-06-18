<script setup lang="ts">
import photo from '../assets/photo.png'

import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
</script>

<template>
<v-container>
    <v-row>
        <v-spacer></v-spacer>
        <v-col class="d-flex justify-center align-center" cols="10" xl="4" md="6">
            <v-avatar image="avatar.png" style="width: 90%; height: auto;">
                <v-img :src="photo" alt="mv-photo"></v-img>
            </v-avatar>
        </v-col>
        <v-spacer v-if="mobile"></v-spacer>
        <v-col class="mt-15" cols="12" xl="4" md="6">
            <h1>Mikita Volakh</h1>
            <h2 style="font-weight: 500; color: lightgray;">Software Developer</h2>
            <p style="text-align: justify; text-justify: inter-word;">
                An Amstedam-based software developer and a recent BSc Computer Science graduate. Proficient in fullstack web & desktop development, DevOps, Cloud, ML/AI and more! Talk to me about Vue.js and Typescript. Lifetime gaming enthusiast and interested game development. Actively looking for a Software Engineer position in the Nethelands.</p>
            <p style="text-align: justify; text-justify: inter-word;" class="mt-3">Oh, beware of the cat!</p>    
            <v-row class="mt-auto">
                <v-col cols="12" class="d-flex justify-center">
                    <v-btn prepend-icon="mdi-linkedin" variant="plain" class="mx-2" href="https://www.linkedin.com/in/mvolakh/" target="_blank">LinkedIn</v-btn>
                    <v-btn prepend-icon="mdi-github" variant="plain" class="mx-2" href="https://github.com/mvolakh" target="_blank">GitHub</v-btn>
                </v-col>
            </v-row>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</v-container>
</template>

<style scoped>
.v-btn {
    background-color: black;
}
</style>