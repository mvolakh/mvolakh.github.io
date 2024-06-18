<script setup lang="ts">
import Language from '../components/Language.vue'
</script>

<template>
<v-container>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" lg="5">
            <Language lang="Javascript" :levelNumerical=100 />
            <Language lang="Typescript" :levelNumerical=95 />
            <Language lang="C/C++" :levelNumerical=90 />
            <Language lang="Python" :levelNumerical=80 />
            <Language lang="SQL" :levelNumerical=80 />
            <Language lang="Java" :levelNumerical=65 />
        </v-col>
        <v-col cols="12" lg="5">
            <Language lang="Bash" :levelNumerical=65 />
            <Language lang="x86" :levelNumerical=50 />
            <Language lang="AHK" :levelNumerical=50 />
            <Language lang="C#" :levelNumerical=30 />
            <Language lang="Scala" :levelNumerical=30 />
            <Language lang="R" :levelNumerical=20 />   
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" lg="10">
            <v-divider></v-divider>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" lg="5">
            <Language lang="Belarusian" :levelNumerical=100 level="Native" />
            <Language lang="Russian" :levelNumerical=100 level="Native" />
            <Language lang="English" :levelNumerical=100 level="C2" />
        </v-col>
        <v-col cols="12" lg="5">
            <Language lang="Ukrainian" :levelNumerical=80 level="Near-native" />
            <Language lang="Dutch" :levelNumerical=45 level="A2+" />
            <Language lang="Polish" :levelNumerical=20 level="A1" />
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</v-container>
</template>

<style scoped>
</style>