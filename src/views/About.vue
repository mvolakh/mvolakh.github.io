<script lang="ts">
import { ref, defineComponent, reactive, toRefs, PropType } from 'vue'

import TechnologyType from '../types/TechnologyType'

import photo from '../assets/photo.png'

export default defineComponent({
    name: 'About',
    props: {
      technologies: {
        required: true,
        type: Array as PropType<TechnologyType[]>
      }
    },
    setup() {
      const langs = ref<string[]>(
        [
          "C",
          "C++",
          "x86 Assembly",
          "Java",
          "Scala",
          "Haskell",
          "Python"
        ]);
      const courses = ref<string[]>(
        [
          "Data Structures and Algorithms",
          "Object-Oriented and Functional Programming",
          "Computer Architecture & Networks",
          "Databases",
          "Software Design",
          "Compiler Construction"
        ]);
      return { photo, courses, langs }
    }
})
</script>

<template>
<v-container>
  <v-row class="d-flex justify-center mt-5">
    <v-col cols="12" lg="6">
      <v-sheet class="pa-2 ma-2">
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <h1>About</h1>
          </v-col>
        </v-row>
        <v-row class="text-justify">
          <v-col cols="12" lg="9" >
            <p>My name's <b>Mikita Volakh</b>.</p>
            <p>I am a <b>3rd year BSc Computer Science student</b> at <a href="https://vu.nl/en">Vrije Universiteit Amsterdam</a> 
              taking <a href="https://vu.nl/en/education/minor/deep-programming/curriculum">Deep Programming minor</a>.
              The expected graduation date is in November 2023.
            </p>
            <br>
            <p>During my time at VU I had experience with a lot of programming languages including: 
            <span v-for="(val,key) of langs">{{ val }}<span v-if="key != Object.keys(langs).length - 1">, </span></span>.
            As multiple courses were focussed on low-level programming, C and C++ have been the most used programming languages so far.
            </p>
            <br>
            <p>Throughout my studies I took a bunch of courses, among which the most notable are: 
              <span v-for="(val,key) of courses">{{ val }}<span v-if="key != Object.keys(courses).length - 1">, </span></span> and more...
            </p>
            <br>
            <p>If you're wondering how I got into programming — I have been a gamer my entire life. It all started with going through game 
              files and configs, then I started writing/modyfying mods for some of the games I played.
              Then the passion for computer games slowly disappeared, which is when I actually started programming. That was about the same
              time I went to obtain my Bachelor's in CS.
            </p>
            <br>
            <p>Now, I'm primarily focussed on learning different technologies related to web developement, but mostly:
              <span v-for="(val,key) of technologies">{{ val.name }}<span v-if="key == Object.keys(technologies).length - 2"> and </span>
                <span v-if="key != Object.keys(technologies).length - 1 && key != Object.keys(technologies).length - 2">, </span></span>.
              I also love creating QoL game mods, usually in C# for those games written in Unity. Unity is another technology that really attracts me.
              Hopefully, one day I'll give game development a shot.
            </p>
            <br>
            <p>I'm currently looking for an <b>Internship/Junior Fullstack/Backend</b> position.</p>
            <br>
            <p>You can find my CV and my contacts below.</p>

          </v-col>
          <v-col cols="12" lg="3" class="d-flex justify-center">
            <v-avatar size="128">
              <v-img :src="photo" alt="mv-photo"></v-img>
            </v-avatar>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" cols="12" md="6">
              <v-btn density="comfortable" icon="mdi-file-document" class="mr-4" href=""></v-btn>
              <v-btn density="comfortable" icon="mdi-linkedin" class="mr-4" href="https://www.linkedin.com/in/mvolakh/"></v-btn>
              <v-btn density="comfortable" icon="mdi-github" class="mr-4" href="https://github.com/mvolakh"></v-btn>
              <v-btn density="comfortable" icon="mdi-email" href="mailto:m.volakh@gmail.com"></v-btn>
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
