<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    name: 'Header',
    components: {},
    setup() {
        const state = reactive({

        })

        const links = ref([
            'Home',
            'About',
            'Study at VU',
            'Projects'
        ])

        return { ...toRefs(state), links }
    }
})
</script>

<template>
<v-app-bar class="bg-grey-lighten-1">
    <v-row justify="center">
        <v-btn v-for="link in links" :key="link" color="white" class="mx-2" rounded="xl">
            <router-link :to="{name: link}">{{link}}</router-link>
        </v-btn>
    </v-row>
</v-app-bar>
</template>
  
<style scoped>
a { 
    text-decoration: none;
    color: white;
}
</style>
  