import tailwindTypography from '@tailwindcss/typography'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-headlessui',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],

  app: {
    head: {
      title: 'Denis Lachartre',
      meta: [],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  content: {
    highlight: {
      preload: ['javascript'],
      theme: 'dark-plus',
    },
  },

  compatibilityDate: '2024-11-04',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
})
