<script setup lang="ts">
const isDark = useDark()

const toggleDarkMode = useToggle(isDark)

const darkModeText = computed(() => {
    return isDark.value ? "Dark Mode" : "Light Mode"
})

const darkModeIconName = computed(() =>
    isDark.value
        ? "line-md:sunny-outline-to-moon-loop-transition"
        : "line-md:moon-to-sunny-outline-loop-transition"
)
</script>

<template>
    <div class="">
        <header
            class="relative flex justify-between py-8 px-5 shadow-md font-display dark:bg-blue-900"
        >
            <p class="font-extrabold dark:text-white">Where in the world?</p>
            <div
                class="relative flex items-center justify-between w-[6.5rem] cursor-pointer select-none"
                @click="toggleDarkMode()"
            >
                <Icon
                    :key="darkModeIconName"
                    :name="darkModeIconName"
                    mode="svg"
                    restart="always"
                />
                <Transition>
                    <p
                        :key="darkModeText"
                        class="absolute right-0 font-medium dark:text-white"
                    >
                        {{ darkModeText }}
                    </p>
                </Transition>
            </div>
        </header>
        <slot />
    </div>
</template>

<style>
body {
    @apply bg-gray-50 dark:bg-blue-950 dark:text-white;
}
</style>

<style scoped>
.v-enter-active {
    transition: all .5s ease;
}

.v-leave-active {
    transition: transform .5s ease, opacity .3s ease-out;
}

.v-enter-from {
    transform: translateY(-15px);
    opacity: 0;
}

.v-leave-to {
    transform: translateY(15px);
    opacity: 0;
}
</style>
