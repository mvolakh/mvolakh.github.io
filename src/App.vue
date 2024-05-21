<script lang="ts">
import { defineComponent, ref } from 'vue';

import Home from './views/Home.vue'

export default defineComponent({
    name: 'App',
    components: { Home },
    setup() {
        return {}
    }
})
</script>

<template>
<v-app>
    <v-main style="background-color: black;">
        <Home/>
    </v-main>
</v-app>
</template>

<style scoped>
</style>
