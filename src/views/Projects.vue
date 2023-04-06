<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'

import Project from '../components/Project.vue'

import projects from '../data/projects'

export default defineComponent({
    name: 'Projects',
    components: { Project },
    setup() {
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
