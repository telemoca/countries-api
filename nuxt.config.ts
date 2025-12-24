// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Countries API",
            htmlAttrs: {
                lang: "en",
            },
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        },
    },
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: [
        "@nuxt/eslint",
        "@nuxt/image",
        "@nuxtjs/tailwindcss",
        "@vueuse/nuxt",
        "@nuxt/icon",
        "@nuxt/fonts",
        "@nuxtjs/color-mode",
    ],
    icon: {
        mode: "css",
        cssLayer: "base",
    },
    fonts: {
        defaults: {
            weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
    },
    colorMode: {
        preference: "system",
        fallback: "light",
        classSuffix: "",
    },
})
