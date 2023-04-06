<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'

import CourseExpansionPanel from '../components/CourseExpansionPanel.vue'

import courses from '../data/courses'

export default defineComponent({
    name: 'Study',
    components: { CourseExpansionPanel },
    setup() {
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
