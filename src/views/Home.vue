<script lang="ts">
import { ref, defineComponent, reactive, toRefs, PropType } from 'vue'

import TechnologyType from '../types/TechnologyType'

import Socials from '../components/Socials.vue'

import avatar from '../assets/avatar.png'

export default defineComponent({
    name: 'Home',
    components: { Socials },
    props: {
      technologies: {
        required: true,
        type: Array as PropType<TechnologyType[]>
      }
    },
    setup() {
      return { avatar }
    }
})
</script>

<template>
<v-container>
  <v-row class="d-flex justify-center mt-5">
    <v-col cols="12" lg="6">
      <v-sheet class="pa-2 ma-2">
        <div class="d-flex align-center text-justify">
          <div>
            <b style="color: red;">A new, completely redesigned website version is coming up soon😊 (upd: Feb 13, 2024)</b>
            <h1>Hey!</h1>
            <p>I am a <b>3rd year BSc Computer Science student</b> at <a href="https://vu.nl/en">Vrije Universiteit Amsterdam</a>.</p>
            <br>
            <p>You can find my <b><a href="https://github.com/mvolakh/mvolakh.github.io/raw/master/docs/cv.pdf">CV</a></b> and more information about me <b><router-link :to="{name: 'About'}">here</router-link></b>.</p>
            <br>
            <p>I'm currently looking for an <b>Internship/Junior Fullstack/Backend</b> position.</p>
            <br>
            <p>Throughout my studies, I have been working with a number of programming languages.</p>
            <p>While I'm not constricted with specific technologies, I'm currently working and focussed on gaining experience in the following ones: </p>
            <v-list lines="two">
              <v-list-item v-for="tech in technologies" :key="tech.name" :title="tech.name" :subtitle="tech.desc">
                <template v-slot:prepend>
                  <v-icon :icon="tech.img"></v-icon>
                </template>                  
              </v-list-item>
            </v-list>
            <p></p>
          </div>
          <div class="ml-auto d-none d-sm-flex">
            <v-avatar size="128">
              <v-img :src="avatar" alt="avatar"></v-img>
            </v-avatar>
          </div>
        </div>
        <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" cols="12" md="6">
              <Socials />
            </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
