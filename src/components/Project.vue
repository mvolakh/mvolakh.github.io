<script setup lang="ts">
import { PropType } from 'vue';
import Project from '../types/Project';
import { useDisplay } from 'vuetify';

const props = defineProps({
    project: { type: Object as PropType<Project>, required: true }
});

const getImageUrl = (name: string) => {
    return new URL(`../assets/projects/${name}.png`, import.meta.url).href
}

const { mobile } = useDisplay();
</script>

<template>
<v-container>
    <v-row>
        <v-col cols="2">
            <v-img :src="getImageUrl(project.img)" :alt="project.img"></v-img>
        </v-col>
        <v-col cols="10">
            <h3 class="projectName">
                {{ project.name }}
                <span class="projectTechs" v-show="!mobile">
                    <small v-for="(tech, index) in project.technologies" :key="index">
                        {{ tech }}<span v-if="index < project.technologies.length - 1"> | </span>
                    </small>
                </span>
            </h3>
            <p>{{ project.desc }}</p>
            <v-row v-for="keypoint in project.keypoints" class="mt-1">
                <v-col class="d-flex align-center text-wrap">
                    <v-icon icon="mdi-code-greater-than" class="mr-3"></v-icon>
                    <span>{{ keypoint }}</span>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<style scoped>
.v-list {
    background-color: black;
}

.projectName {
    position: relative;
}

.projectTechs {
    position: absolute;
    right: 0;
    bottom: 0;
}

.projectTechs small {
    font-size: small;
}
</style>