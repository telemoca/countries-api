<script setup lang="ts">
interface Country {
    flags: {
        png: string
        svg: string
        alt: string
    }
    name: {
        common: string
        official: string
    }
    capital: string[]
    region: string
    population: number
    cca3: string
}

const { data, error } = useFetch<Country[]>(
    "https://restcountries.com/v3.1/all?fields=cca3,name,population,region,capital,flags"
)

const formattedPopulation = (population: number) => {
    return new Intl.NumberFormat("en-US").format(population)
}
</script>

<template>
    <div class="w-[90%] m-auto">
        <SearchBar />
        <div v-if="error">{{ error }}</div>
        <div v-else class="grid gap-10 py-10 px-5">
            <div
                v-for="country in data"
                :key="country.cca3"
                class="rounded-md bg-white dark:bg-blue-900 shadow-md overflow-hidden"
            >
                <img
                    :src="country.flags.svg"
                    :alt="country.flags.alt"
                    class=""
                >
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
            </div>
        </div>
    </div>
</template>
