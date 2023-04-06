<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import ProjectType from '../types/ProjectType'

export default defineComponent({
    name: 'CourseExpansionPanel',
    props: {
        project: {
            required: true,
            type: Object as PropType<ProjectType>
        }
    },
    components: {},
    setup() {
        const getImageUrl = (name: string) => {
            return new URL(`../assets/projects/${name}.png`, import.meta.url).href
        }

        return { getImageUrl }
    }
})
</script>

<template>
<v-container variant="elevated" class="fill-height bg-white rounded text-justify">
    <v-row class="align-self-start">
        <v-col cols="12">
            <div>
                <span class="text-h6">{{ project.name }}</span>
                <span class="ml-3">
                    <v-btn density="comfortable" elevation="1" icon="mdi-github" target="_blank" :href="project.link" :disabled="!project.link.length"></v-btn>
                </span>
            </div>
        </v-col>
    </v-row>
    <v-row class="align-self-center">
        <v-col cols="9">
            <div>{{ project.desc }}</div>
            <div v-if="project.img.startsWith('vu_blauw')" class="mt-3"><b>NOTE:</b> this project is not made public as it uses VU license. If you want to have a look at it, please contact me.</div>
        </v-col>
        <v-col cols="3" class="d-flex justify-center align-start">
            <v-img v-if="!getImageUrl(project.img).endsWith('undefined')" :src="getImageUrl(project.img)" :alt="project.img"></v-img>
            <v-progress-circular v-else indeterminate color="primary"></v-progress-circular>
        </v-col>
    </v-row>
    <v-row class="align-self-end">
        <v-col cols="12"> 
            <v-divider class="mb-3 mt-3"></v-divider>
                <v-chip v-for="tech in project.technologies" class="mr-2 mb-2">
                    <v-icon v-if="tech.img.length" :icon="tech.img"></v-icon>
                    <p v-else class="font-weight-bold">{{ tech.name }}</p>
                </v-chip>
        </v-col>
    </v-row>
</v-container >


<!-- <v-card variant="elevated" class="fill-height">
    <v-card-item class="d-flex text-justify fill-height">
        <v-row class="align-self-start">
            <v-col cols="9">
                <div>
                    <span class="text-h6">{{ project.name }}</span>
                    <span class="ml-3">
                        <v-btn density="comfortable" elevation="1" icon="mdi-github" target="_blank" :href="project.link" :disabled="!project.link.length"></v-btn>
                    </span>
                </div>
                <div class="mt-1">{{ project.desc }}</div>
                <div v-if="project.img.startsWith('vu_blauw')" class="mt-1"><b>NOTE:</b> this project is not made public as it uses VU license. If you want to have a look at it, please contact me.</div>
            </v-col>
            <v-col cols="3" class="d-flex justify-center align-center">
                <v-img v-if="!getImageUrl(project.img).endsWith('undefined')" :src="getImageUrl(project.img)" :alt="project.img"></v-img>
                <v-progress-circular v-else indeterminate color="primary"></v-progress-circular>
            </v-col>
        </v-row>
        <v-row class="align-self-end">
            <v-col cols="12"> 
                <v-divider class="mb-3 mt-3"></v-divider>
                    <v-chip v-for="tech in project.technologies" class="mr-2">
                        <v-icon v-if="tech.img.length" :icon="tech.img"></v-icon>
                        <p v-else class="font-weight-bold">{{ tech.name }}</p>
                    </v-chip>
            </v-col>
        </v-row>
    </v-card-item>
</v-card> -->
</template>
  
<style scoped>
</style>
  