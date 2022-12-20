import tailwindTypography from "@tailwindcss/typography";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-headlessui",
    "nuxt-icon",
  ],
  content: {},
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
});
