<script setup lang="ts">
import countries from 'i18n-iso-countries'
import en from 'i18n-iso-countries/langs/en.json'



const { cca3 } = useRoute().params

const { data, error } = useFetch<Country>(
    `https://restcountries.com/v3.1/alpha/${cca3}?fields=cca3,name,population,region,subregion,capital,flags,tld,currencies,languages,borders`,
    {
        lazy: true,
    }
)

countries.registerLocale(en)
const countryName = (code :string) => countries.getName(code, 'en')

const formattedPopulation = (population: number | undefined) => {
    if (population) {
        return new Intl.NumberFormat("en-US").format(population)
    }
}

const nativeName = computed(() => {
    const nativeName = data.value?.name.nativeName
    if (nativeName) {
        const keys = Object.keys(nativeName)
        if (keys[0]) {
            return nativeName[keys[0]]?.official
        }
    }
    return undefined
})

const currencies = computed(() => {
    const currencies = data.value?.currencies
    if (currencies) {
        const keys = Object.keys(currencies)
        return keys.join(", ")
    }
    return undefined
})

const languages = computed(() => {
    const languages = data.value?.languages
    if (languages) {
        const values = Object.values(languages)
        return values?.join(", ")
    }
    return undefined
})
</script>

<template>
    <div class="w-[90%] m-auto py-7 font-display">
        <NuxtLink
            class="flex items-center gap-2 p-2 px-4 w-fit rounded-sm shadow-neutral-300 dark:shadow-neutral-900 shadow-md dark:bg-blue-900"
            to="/"
        >
            <Icon name="line-md:arrow-small-left" class="translate-y-[2px]" />
            <p>Back</p>
        </NuxtLink>
        <div v-if="error">{{ error }}</div>
        <div v-else class="lg:flex items-center gap-10 mt-5">
            <img
                :src="data?.flags.svg"
                :alt="data?.flags.alt"
                class="my-7 text-grey-950 w-full max-w-md lg:max-w-3xl"
            />
            <div>
                <h1 class="text-xl font-black mb-5">{{ data?.name.official }}</h1>
                <div class="md:flex gap-28">
                    <div class="flex flex-col gap-2 mb-7">
                        <p class="text-grey-950 dark:text-white">
                            <span class="font-semibold">Native Name: </span
                            >{{ nativeName }}
                        </p>
                        <p class="text-grey-950 dark:text-white">
                            <span class="font-semibold">Population: </span
                            >{{ formattedPopulation(data?.population) }}
                        </p>
                        <p class="text-grey-950 dark:text-white">
                            <span class="font-semibold">Region: </span
                            >{{ data?.region }}
                        </p>
                        <p class="text-grey-950 dark:text-white">
                            <span class="font-semibold">Sub Region: </span
                            >{{ data?.subregion }}
                        </p>
                        <p class="text-grey-950 dark:text-white">
                            <span class="font-semibold">Capital: </span
                            >{{ data?.capital[0] }}
                        </p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-grey-950 dark:text-white">
                            <span class="font-semibold">Top Level Domain: </span
                            >{{ data?.tld[0] }}
                        </p>
                        <p class="text-grey-950 dark:text-white">
                            <span class="font-semibold">Currencies: </span
                            >{{ currencies }}
                        </p>
                        <p class="text-grey-950 dark:text-white">
                            <span class="font-semibold">Languages: </span
                            >{{ languages }}
                        </p>
                    </div>
                </div>
                <div>
                    <h2 v-if="data?.borders.length !== 0" class="font-semibold text-lg my-5">Border Countries:</h2>
                    <div class="flex gap-2 flex-wrap">
                        <NuxtLink v-for="border in data?.borders" :key="border" :to="`/${border}`" class="py-1 px-4 text-grey-950 dark:text-white bg-white dark:bg-blue-900 shadow-neutral-300 dark:shadow-neutral-900 shadow-md">
                            {{ countryName(border) }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
