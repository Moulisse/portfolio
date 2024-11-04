import tailwindTypography from "@tailwindcss/typography";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-headlessui",
    "@nuxt/image",
    "@nuxt/icon",
  ],
  app: {
    head: {
      title: "Denis Lachartre",
      meta: [],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
  content: {
    highlight: {
      preload: ["javascript"],
      theme: "dark-plus",
    },
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
});