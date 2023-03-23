<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    name: 'NotFound',
    components: {},
    setup() {
      const count = ref<Number>(0)
      const state = reactive({})

      return { ...toRefs(state) }
    }
})
</script>

<template>
<v-row>
    <v-spacer/>
    <v-col align="center">
        <h1>The page has not been found :(</h1>
    </v-col>
    <v-spacer/>
</v-row>
</template>

<style scoped>
</style>
