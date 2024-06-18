<script setup lang="ts">
</script>

<template>
    <v-footer class="text-center mb-1">
        <v-row>
            <v-col cols="12">
                {{ new Date().getFullYear() }} — <strong>Mikita Volakh</strong>
                <br>
                <v-btn icon="mdi-email" variant="plain" href="mailto:m.volakh@gmail.com" target="_blank"></v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<style scoped>
.v-footer {
    background-color: black;
}
</style>