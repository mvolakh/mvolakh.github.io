<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'

import ProjectType from '../types/ProjectType'

import Project from '../components/Project.vue'

export default defineComponent({
    name: 'Projects',
    components: { Project },
    setup() {
      const projects = ref<ProjectType[]>([
        {
          name: "Portfolio",
          desc: "Exactly what you're looking at right now. Deployed to gh-pages. No CSS preprocessors. No database. Entirely a frontend application.",
          img: "portfolio",
          technologies: [
            {
              name: "Vue3",
              desc: "",
              img: "mdi-vuejs"
            },
            {
              name: "Unity",
              desc: "",
              img: "mdi-vuetify"
            },
            {
              name: "Unity",
              desc: "",
              img: "mdi-language-typescript"
            }
          ],
          link: "https://github.com/mvolakh/mvolakh"
        },
        {
          name: "NoStumps",
          desc: "A mod for Valheim game that modifies the mechanic of tree stump spawning. Uses BepInEx modding tool and injects the game code based on scraped game assemblies.",
          img: "nostump",
          technologies: [
            {
              name: "C#",
              desc: "",
              img: "mdi-language-csharp"
            },
            {
              name: "Unity",
              desc: "",
              img: "mdi-unity"
            }
          ],
          link: "https://github.com/mvolakh/valheim_mods_nostumps"
        },
        {
          name: "Belarusian Language Valheim",
          desc: "[WIP] Belarusian language support pack for Valheim game. Not really a programming project, just a localization of an entire game.  Uses BepInEx and Jotunn modding tool and injects the game code based on scraped game assemblies.",
          img: "bel_valheim",
          technologies: [
            {
              name: "C#",
              desc: "",
              img: "mdi-language-csharp"
            },
            {
              name: "Unity",
              desc: "",
              img: "mdi-unity"
            }
          ],
          link: "https://github.com/mvolakh/Valheim_Belarusian"
        },
        {
          name: "FenneC Compiler",
          desc: "A compiler for a C-like language called FenneC (language designed at VU for educational purposes) designed during Compiler Construction course at VU. Frontend was done in Python, rest was done is C++ and LLVM.",
          img: "vu_blauw",
          technologies: [
            {
              name: "C++",
              desc: "",
              img: "mdi-language-cpp"
            },
            {
              name: "LLVM",
              desc: "",
              img: ""
            },
            {
              name: "Python",
              desc: "",
              img: "mdi-language-python"
            }
          ],
          link: ""
        },
        {
          name: "MNIST Digit Classifier",
          desc: "A neural network model trained to recognise handwritten digits. Designed during Machine Learning course at VU.",
          img: "vu_blauw",
          technologies: [
            {
              name: "Python",
              desc: "",
              img: "mdi-language-python"
            }
          ],
          link: ""
        },
        {
          name: "Linux userspace TCP stack",
          desc: "A Linux userspace networking stack designed as a part of Advanced Network Programming course at VU. Implements ICMP and TCP protocols.",
          img: "vu_blauw",
          technologies: [
            {
              name: "C",
              desc: "",
              img: "mdi-language-c"
            }
          ],
          link: ""
        },
        {
          name: "Multithreaded Data Structures",
          desc: "An implementation of a linked list and a binary search tree that supports concurrent operations. Implements coarse-grained and fine-grained locking algorithms. Part of an assignment for Concurrency & Multithreading course at VU.",
          img: "vu_blauw",
          technologies: [
            {
              name: "Java",
              desc: "",
              img: "mdi-language-java"
            }
          ],
          link: ""
        },
        {
          name: "SSL Secure Chat",
          desc: "A low-level implementation (not full, sadly) of chat application that sets SSL connection between clients up designed as a part of Secure Programming course at VU.",
          img: "vu_blauw",
          technologies: [
            {
              name: "C",
              desc: "",
              img: "mdi-language-c"
            },
            {
              name: "Shell",
              desc: "",
              img: "mdi-bash"
            }
          ],
          link: ""
        },
        {
          name: "OS tools",
          desc: "Several projects designed as a part of Operating Systems course at VU. Implements a Unix shell, a heap memory allocator, a driver for the SFS filesystem and remote in-memory key-value store service.",
          img: "vu_blauw",
          technologies: [
            {
              name: "C",
              desc: "",
              img: "mdi-language-c"
            }
          ],
          link: ""
        },
        {
          name: "Tetris",
          desc: "A basic Tetris game developed as a part of Object-Oriented and Functional programming course at VU.",
          img: "vu_blauw",
          technologies: [
            {
              name: "Scala",
              desc: "",
              img: ""
            }
          ],
          link: ""
        },
        {
          name: "Snake",
          desc: "A basic Snake game developed as a part of Object-Oriented and Functional programming course at VU.",
          img: "vu_blauw",
          technologies: [
            {
              name: "Scala",
              desc: "",
              img: ""
            }
          ],
          link: ""
        },
        {
          name: "GPXManager",
          desc: "A fitness app designed as a part of Software Design course at VU. Allows GPX files import containing GPS metadata. Analyzes user-imported activities and introduces different metrics realted to human body.",
          img: "vu_blauw",
          technologies: [
            {
              name: "Java",
              desc: "",
              img: "mdi-language-java"
            }
          ],
          link: ""
        },
        {
          name: "Hope",
          desc: "A full-stack application for Hope charity project designed as a part of Science Foundation program at Holland ISC prior to entering VU.",
          img: "vu_blauw",
          technologies: [
            {
              name: "Javascript",
              desc: "",
              img: "mdi-language-javascript"
            },
            {
              name: "Express.js",
              desc: "",
              img: ""
            },
            {
              name: "MongoDB",
              desc: "",
              img: ""
            },
            {
              name: "SCSS",
              desc: "",
              img: ""
            }
          ],
          link: ""
        },
      ]);

      return { projects }
    }
})
</script>

<template>
<v-container>
  <v-row class="d-flex justify-center mt-5" fill-height>
    <v-col v-for="project in projects" cols="12" lg="4" md="6" grow>
      <Project :project="project"/>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>
</style>
