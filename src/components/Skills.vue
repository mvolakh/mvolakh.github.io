<script setup lang="ts">
import TooltipIcon from "./TooltipIcon.vue";
</script>

<template>
<v-container>
    <v-row>
        <v-col cols="12" xl="3" md="6" class="equal-height-column" v-motion-pop-visible>
            <v-card title="Backend" variant="tonal" class="skills-card text-justify"
            text="I specialize in backend development with JavaScript and TypeScript, but not limited to JS frameworks and can definitely work with other programming languages as well (see below). Proficiency in utilizing both SQL and NoSQL databases, favoring MongoDB. Experience with WebSockets and WebRTC for implementing real-time features and the use of various ORMs and diverse authentication mechanisms.">
                <v-card-actions class="align-end">
                    <TooltipIcon icon="mdi-nodejs" tooltip="Node.js + Express"/>
                    <TooltipIcon icon="mdi-webrtc" tooltip="WebRTC"/>
                    <TooltipIcon icon="mdi-database" tooltip="SQL Databases"/>
                    <TooltipIcon icon="mdi-dots-vertical" :extended="true" :tooltip="['NoSQL', 'NodeJS', 'Mongoose', 'Prisma', 'WebSockets', 'JWT', 'OAuth']"/>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" xl="3" md="6" class="equal-height-column" v-motion-pop-visible>
            <v-card title="Frontend" variant="tonal" class="skills-card text-justify"
            text="I usually work with Vue.js and Nuxt (personal preference). For desktop applications, I use Electron. I utilize Vuetify, Tailwind, and some other libraries for styling to create visually appealing and responsive designs. In case your team is used to a different frontend framework (we all know most do not really use Vue and favour Angular/React) or your project requires it, I can easily switch to it.">
                <v-card-actions class="align-end">
                    <TooltipIcon icon="mdi-vuejs" tooltip="Vue"/>
                    <TooltipIcon icon="mdi-nuxt" tooltip="Nuxt"/>
                    <TooltipIcon icon="mdi-electron-framework" tooltip="Electron"/>
                    <TooltipIcon icon="mdi-vuetify" tooltip="Vuetify"/>
                    <TooltipIcon icon="mdi-tailwind" tooltip="Tailwind"/>
                    <TooltipIcon icon="mdi-bootstrap" tooltip="Bootstrap"/>
                    <TooltipIcon icon="mdi-dots-vertical" :extended="true" :tooltip="['JavaFX']"/>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" xl="3" md="6" class="equal-height-column" v-motion-pop-visible>
            <v-card title="DevOps & Cloud" variant="tonal" class="skills-card text-justify"
            text="Skilled in Git version control and automated workflows. Experienced with AWS services (S3, Lambda, EC2) for scalable cloud infrastructure. Proficient in Docker and modern containerization techniques for efficient deployment. Familiar with UNIX platforms (Linux, Fedora). Utilizing nginx for web server configuration and optimization. Currently learning Kubernetes and how to use it in combination with AWS and Docker.">
                <v-card-actions class="align-end">
                    <TooltipIcon icon="mdi-aws" tooltip="AWS Services"/>
                    <TooltipIcon icon="mdi-docker" tooltip="Docker"/>
                    <TooltipIcon icon="mdi-kubernetes" tooltip="Kubernetes"/>
                    <TooltipIcon icon="mdi-git" tooltip="Git"/>
                    <TooltipIcon icon="mdi-linux" tooltip="Linux"/>
                    <TooltipIcon icon="mdi-npm" tooltip="npm"/>
                    <TooltipIcon icon="mdi-dots-vertical" :extended="true" :tooltip="['nginx']"/>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" xl="3" md="6" class="equal-height-column" v-motion-pop-visible>
            <v-card title="ML" variant="tonal" class="skills-card text-justify"
            text="Experience with ML/DL using multiple Python and JS libraries and frameworks. Development and optimisation of algorithms/models for specific tasks, with expertise in sequential data processing and time-series predictions (focus on RNNs). Integration of ML models into other critical parts of systems. Skillful in data & statistical analysis, NLP handling, and efficient large datasets processing.">
                <v-card-actions class="align-end">
                    <TooltipIcon icon="mdi-dots-vertical" :extended="true" :tooltip="['Tensorflow', 'keras', 'pytorch', 'pandas', 'scikit', 'Brain.js', 'NLP', 'Data Analysis', 'Data Processing']"/>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<style scoped>
.v-card {
    background-color: black;
}

.equal-height-column {
    display: flex;
    align-items: stretch;
}

.skills-card {
    display: flex;
    flex-direction: column;
}

.skills-card .v-card-actions {
    margin-top: auto;
}
</style>