<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    name: 'Footer',
    components: {}
})
</script>

<template>
<v-footer app bottom fixed padless>
    <v-row>
        <v-col class="text-center mt-4" cols="12">
          <strong>{{ new Date().getFullYear() }}</strong> 
        </v-col>
    </v-row>
</v-footer>
</template>
  
<style scoped>
</style>
  