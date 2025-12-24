<script setup lang="ts">
const { data, error } = useFetch<Country[]>(
    "https://restcountries.com/v3.1/all?fields=cca3,name,population,region,capital,flags",
    {
        lazy: true,
    }
)

const user_research = ref("")
const user_filter = ref("")

const matchesSearch = (country: Country, user_research: string) => {
    const fields = [
        country.name.official,
        country.name.common,
        country.capital[0],
        country.region,
        country.cca3,
    ]

    return fields.some((field) =>
        field?.toLowerCase().includes(user_research.toLowerCase())
    )
}

const researchedAndFilteredData = computed(() => {
    let newData = data.value

    if (user_research.value) {
        newData = newData?.filter((country) =>
            matchesSearch(country, user_research.value)
        )
    }
    if (user_filter.value) {
        newData = newData?.filter(
            (country) => country.region === user_filter.value
        )
    }
    return newData
})

const formattedPopulation = (population: number) => {
    return new Intl.NumberFormat("en-US").format(population)
}
</script>

<template>
    <div class="w-[90%] m-auto font-display">
        <div class="md:flex justify-between items-center mt-10">
            <SearchBar v-model="user_research" />
            <FilterDropdown v-model="user_filter" />
        </div>
        <div v-if="error">{{ error }}</div>
        <div v-else class="grid gap-10 py-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
            <NuxtLink
                v-for="country in researchedAndFilteredData"
                :key="country.cca3"
                :to="country.cca3"
                class="max-w-[900px] m-auto rounded-md bg-white dark:bg-blue-900 h-full shadow-md overflow-hidden"
            >
                <img
                    :src="country.flags.svg"
                    :alt="country.flags.alt"
                    class=""
                />
                <div class="m-7 mt-5">
                    <p class="font-bold text-lg mb-4">
                        {{ country.name.official }}
                    </p>
                    <div class="flex flex-col gap-[0.125rem]">
                        <p>
                            <span class="font-semibold">Capital: </span>
                            {{ country.capital[0] }}
                        </p>
                        <p>
                            <span class="font-semibold">Region: </span>
                            {{ country.region }}
                        </p>
                        <p>
                            <span class="font-semibold">Population: </span>
                            {{ formattedPopulation(country.population) }}
                        </p>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
