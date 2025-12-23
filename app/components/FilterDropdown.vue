<script setup lang="ts">
const [isOpen, toggle] = useToggle()

const dropdown = useTemplateRef("dropdown")

onClickOutside(dropdown, () => {
    isOpen.value = false
})

const regions = {
    Africa: "Africa",
    America: "Americas",
    Asia: "Asia",
    Europe: "Europe",
    Oceania: "Oceania",
}

const user_selected_region = defineModel<string>()

const selectRegion = (region: string) => {
    user_selected_region.value = region
}

const deleteSelectedRegion = () => {
    user_selected_region.value = undefined
}
</script>

<template>
    <div class="flex items-center gap-2 mt-5">
        <div class="relative w-fit">
            <div
                ref="dropdown"
                class="flex items-center gap-3 p-3 bg-white dark:bg-blue-900 rounded-md shadow-md select-none cursor-pointer"
                @click="toggle()"
            >
                <p>Filter by Region</p>
                <Icon
                    name="line-md:chevron-small-down"
                    class="translate-y-[2px]"
                />
            </div>
            <Transition>
                <div
                    v-if="isOpen"
                    class="absolute flex flex-col gap-2 top-full w-full mt-2 p-3 bg-white dark:bg-blue-900 rounded-md shadow-md"
                >
                    <p
                        v-for="[label, value] in Object.entries(regions)"
                        :key="label"
                        class="cursor-pointer select-none"
                        @click="selectRegion(value)"
                    >
                        {{ label }}
                    </p>
                </div>
            </Transition>
        </div>
        <div
            v-if="user_selected_region"
            class="p-3 bg-white dark:bg-blue-900 rounded-md shadow-md cursor-pointer"
            @click="deleteSelectedRegion"
        >
            <Icon name="line-md:close-small" class="translate-y-[2px]" />
        </div>
    </div>
</template>

<style scoped>
.v-enter-active {
    transition: all 0.3s ease;
}

.v-leave-active {
    transition: transform 0.3s ease, opacity 0.2s ease-out;
}

.v-enter-from {
    transform: translateY(-5px);
    opacity: 0;
}

.v-leave-to {
    transform: translateY(-5px);
    opacity: 0;
}
</style>
