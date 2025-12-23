<script setup lang="ts">
const user_research = defineModel<string>()
</script>

<template>
    <form
        class="relative flex justify-center items-center pr-3 mt-10 bg-white dark:bg-blue-900 rounded-md shadow-md overflow-hidden"
        @submit.prevent
    >
        <div class="p-3 cursor-pointer">
            <Icon
                name="line-md:search"
                class="left-0 text-grey-400 dark:text-white translate-y-[1px]"
            />
        </div>
        <input
            v-model="user_research"
            type="text"
            placeholder="Search for a country..."
            class="w-full bg-inherit outline-none dark:text-white dark:placeholder:text-gray-300"
        />
    </form>
</template>
