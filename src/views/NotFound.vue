<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    name: 'NotFound'
})
</script>

<template>
<v-row class="d-flex align-center justify-center">
    <v-col class="d-flex align-center justify-center" cols="12" md="6">
        <h1>The page you're looking for cannot be found :(</h1>
    </v-col>
</v-row>
</template>

<style scoped>
</style>
