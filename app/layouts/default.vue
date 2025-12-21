<script setup lang="ts">
const [mode, switchMode] = useToggle("Dark Mode", {
    truthyValue: "Dark Mode",
    falsyValue: "Light Mode",
})
</script>

<template>
    <div class="">
        <header class="flex justify-between py-8 px-5 shadow-md font-display red">
            <p class="font-bold red">Where in the world?</p>
            <div @click="switchMode()">
                <!-- <img src="" /> -->
                <p>{{ mode }}</p>
            </div>
        </header>
        <slot />
    </div>
</template>

<style scoped>

</style>