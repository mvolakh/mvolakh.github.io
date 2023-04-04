<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'

import CourseType from '../types/CourseType'
import CourseExpansionPanel from '../components/CourseExpansionPanel.vue'
import TechnologyType from '../types/TechnologyType'


export default defineComponent({
    name: 'Study',
    components: { CourseExpansionPanel },
    setup() {
      const courses = ref<CourseType[][]>([
        [
          {
            name: "Computer Programming (P1)",
            difficulty: 4,
            enjoyability: 5,
            practicality: 5,
            desc: "Basically a first course that introduces you to programming. You do weekly assignments meanwhile studying an interactive online book. Programming is done in C++. Exam consists of MCQs. As it is the first course that does any programming, many find it difficult (hence 4/5). If you did some programming in the past, you should not have any problems with it."
          },
          {
            name: "Computational Thinking for Coders (P1)",
            difficulty: 3,
            enjoyability: 2,
            practicality: 5,
            desc: "First course that introduces you to algorithms. You do weekly assignments meanwhile studying an interactive online book (same book CP uses). Most find it average in terms of difficulty. Sometimes, you wouldn't understand some of the algorithms or just incorrectly apply it. But overall, the course is somewhat useful and accompanies CP assignments."
          },
          {
            name: "Requirements Engineering (P2)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 2,
            desc: ""
          },
          {
            name: "Pervasive Computing (P2)",
            difficulty: 2,
            enjoyability: 4,
            practicality: 3,
            desc: ""
          },
          {
            name: "Web Technology (P3)",
            difficulty: 2,
            enjoyability: 4,
            practicality: 5,
            desc: ""
          },
          {
            name: "Logic and Sets (P4)",
            difficulty: 2,
            enjoyability: 1,
            practicality: 3,
            desc: ""
          },
          {
            name: "Computer Organization (P4)",
            difficulty: 4,
            enjoyability: 3,
            practicality: 5,
            desc: ""
          },
          {
            name: "Computer Networks (P5)",
            difficulty: 4,
            enjoyability: 5,
            practicality: 5,
            desc: ""
          },
          {
            name: "Networks and Graphs (P5)",
            difficulty: 2,
            enjoyability: 3,
            practicality: 3,
            desc: ""
          },
          {
            name: "Computer Programming Project (P6)",
            difficulty: 4,
            enjoyability: 5,
            practicality: 5,
            desc: ""
          },
        ],
        [
          {
            name: "Object-Oriented and Functional Programming (P1)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Data Structures and Algorithms (P1)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Operating Systems (P2)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Statistical Methods (P2)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Academic Writing for CS (P3)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "History of Science for CS (P3)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Linear Algebra (P4)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Software Design (P4)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Logic and Modelling (P5)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Databases (P5)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Human-Computer Interaction (P6)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: "Well, that's the only course that is completely useless and is really easy. You just write a report, so if you're good at academic writing. It's somewhat of a common knowledge course, so you could only enjoy it by getting an easiest 10 of your life."
          },
        ],
        [
          {
            name: "Concurrency & Multithreading (P1)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Equational Programming (P1)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Secure programming (P2)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Advanced Network Programming (P2)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Compiler Construction (P3)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Machine Learning (P4)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Automata and Complexity (P4)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
          {
            name: "Philosophy and Ethics (P5)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
          },
        ]
      ]);

      return { courses }
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
            <h1>Study at VU</h1>
          </v-col>
        </v-row>
        <v-row class="text-justify">
          <v-col cols="12">
            <p>Here you can find the descriptions and rankings of different courses in BSc CS degree at Vrije 
              Universiteit Amsterdam. I also give you some tips on how to pass certain courses and what to look for.
            </p><br>
            <p>I ranked each course in terms of how difficult it is to pass, how useful the course is on practice and 
              is the course enjoyable at all.
            </p><br>
            <p>Note that the curriculum has changed in 2022, so some of the courses might have different content and/or have been
              moved to a different period/year.</p><br>
            <v-expansion-panels variant="accordion">
              <v-expansion-panel title="Year I">
                <v-expansion-panel-text>
                  <CourseExpansionPanel :courses="courses[0]" />
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel title="Year II">
                <v-expansion-panel-text>
                  <CourseExpansionPanel :courses="courses[1]" />
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel title="Year III">
                <v-expansion-panel-text>
                  <CourseExpansionPanel :courses="courses[2]" />
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>
</style>
