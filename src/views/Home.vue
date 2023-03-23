<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    name: 'Home',
    components: {},
    setup() {
      const count = ref<Number>(0)

      const state = reactive({

      })



      return { ...toRefs(state) }
    }
})
</script>

<template>
<v-row>
    <v-col>asd</v-col>
</v-row>
</template>

<style scoped>
</style>
