<script lang="ts">
import { Prop } from 'vue';
import { defineComponent, PropType } from 'vue'

import CourseType from '../types/CourseType'

export default defineComponent({
    name: 'CourseExpansionPanel',
    props: {
      courses: {
        required: true,
        type: Array as PropType<CourseType[]>
      }
    },
    components: {}
})
</script>

<template>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel v-for="course in courses" :title="course.name">
        <v-expansion-panel-text>
          <v-row class="text-center">
            <v-col cols="12" md="4" class="d-flex justify-center flex-column">
              <div>
                <v-rating v-model="course.difficulty" size="x-small" readonly></v-rating>
                <h5>Difficulty</h5>
              </div>
            </v-col>
            <v-col cols="12" md="4" class="d-flex justify-center flex-column">
              <div>
                <v-rating v-model="course.enjoyability" size="x-small" readonly></v-rating>
                <h5>Enjoyability</h5>
              </div>
            </v-col>
            <v-col cols="12" md="4" class="d-flex justify-center flex-column">
              <div>
                <v-rating v-model="course.practicality" size="x-small" readonly></v-rating>
                <h5>Practicality</h5>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p>{{ course.desc }}</p>
            </v-col>
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  
<style scoped>
</style>
  