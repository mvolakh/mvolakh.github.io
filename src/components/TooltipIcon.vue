<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
    icon:       { type: String, required: true },
    tooltip:    { type: [String, Array] as PropType<String | String[]>, required: true },
    extended:   { type: Boolean, default: false }
});

</script>

<template>
<!-- mdi-icons interaction with v-tooltip fix -->
<v-btn density="compact" :icon="icon" class="disable-hover-cursor" :ripple="false">
    <v-icon></v-icon>
    <v-tooltip v-if="!extended" activator="parent" location="bottom">{{ tooltip }}</v-tooltip>
    <v-tooltip v-else activator="parent" location="bottom">
        <div v-for="ttip in tooltip">{{ ttip }}</div>
    </v-tooltip>
</v-btn>
</template>

<style scoped>
.disable-hover-cursor {
    cursor: auto;
}
</style>