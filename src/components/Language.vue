<script setup lang="ts">
const props = defineProps({
    lang: { type: String, required: true },
    levelNumerical: { type: Number, required: true },
    level: { type: String }
})
</script>

<template>
<v-row>
    <v-col cols="3">
        {{ lang }}
    </v-col>
    <v-col cols="9" class="d-flex align-center">
        <v-progress-linear v-model="props.levelNumerical" height="20" rounded color="grey" >
            <p>{{ level }}</p>
        </v-progress-linear>
    </v-col>
</v-row>
</template>

<style scoped>
.v-col {
    background-color: r;
}


</style>