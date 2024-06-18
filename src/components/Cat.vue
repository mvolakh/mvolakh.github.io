<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

const { mobile } = useDisplay();

const currentFrame = ref<number>(1);
const isDelighted = ref<boolean>(false);
const totalIdleFrames = 4;
const totalDelightedFrames = 6;
const idleAnimationInterval = 200;
const delightedAnimationInterval = 150;
let intervalId: number | undefined;

const imageWidth = ref<number>(0);
const imageHeight = ref<number>(0);

const animationType = computed(() => {
    return isDelighted.value ? 'greet' : 'idle';
})

const currentImageUrl = () => {
    return new URL(`../assets/cat/${animationType.value + currentFrame.value}.png`, import.meta.url).href;
};

const startAnimation = (frames: number, animationInterval: number) => {
    if (intervalId) {
        clearInterval(intervalId);
        currentFrame.value = 1;
    }

    intervalId = setInterval(() => {
        currentFrame.value = currentFrame.value === frames ? 1 : currentFrame.value + 1;
    }, animationInterval);
};

const startIdleAnimation = () => {
    isDelighted.value = false;
    startAnimation(totalIdleFrames, idleAnimationInterval);
};

const startDelightedAnimation = () => {
    isDelighted.value = true;
    startAnimation(totalDelightedFrames, delightedAnimationInterval);
};

const updateImageDimensions = (url: string) => {
    return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
            imageWidth.value = img.width;
            imageHeight.value = img.height;
            resolve();
        };
        img.src = url;
    });
};

watch(currentImageUrl, async (url) => {
    await updateImageDimensions(url);
});

onMounted(startIdleAnimation);
onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
</script>

<template>
<v-img 
    :src="currentImageUrl()" 
    class="cat"
    :alt="'catAnimation' + animationType + currentFrame"
    v-show="!mobile"
    @mouseover="startDelightedAnimation"
    @mouseleave="startIdleAnimation"
    :width="imageWidth"
    :height="imageHeight">
</v-img>
</template>

<style scoped>
.cat {
    position: fixed;
    bottom: 3%;
    left: 3%;
    z-index: 1000;
    transform: scale(3);
    transform-origin: bottom left;
}
</style>
