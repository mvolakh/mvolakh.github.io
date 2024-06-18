<script setup lang="ts">
import Project from './Project.vue';
import projectsData from '../data/projects';
import { computed, ref } from 'vue';

const showMore = ref<boolean>(false);
const showCount = ref<number>(5);
const displayedProjects = computed(() => {
    return showMore.value ? projectsData : projectsData.slice(0, showCount.value);
})

</script>

<template>
<v-container>
    <h2 class="text-center">Projects</h2>
    <!-- <Project v-for="(project, index) in displayedProjects" :key="index" :project="project" v-motion-slide-visible-bottom></Project> -->
    <div v-for="(project, index) in displayedProjects" :key="index" v-motion-slide-visible-bottom>
        <Project :project="project"/>
        <v-divider v-if="index < displayedProjects.length - 1" class="mt-3"/>
    </div>
    <v-row justify="center">
        <v-col cols="auto">
            <v-btn variant="plain" @click="showMore = !showMore">
                {{ showMore ? 'Show Less' : 'Show More' }}
            </v-btn>
        </v-col>
    </v-row>
</v-container>
</template>

<style scoped>
.v-btn {
    background-color: black;
}
</style>