<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    name: 'About',
    components: {},
    setup() {
      const count = ref<Number>(0)
      const state = reactive({})

      return { ...toRefs(state) }
    }
})
</script>

<template>
<h1>About</h1>
</template>

<style scoped>
</style>
