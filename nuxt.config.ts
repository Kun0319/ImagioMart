// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "nuxt-primevue", "nuxt-jsonld", "nuxt-swiper"],
  css: [
    "primevue/resources/themes/lara-light-green/theme.css",
    "@/assets/styles/main.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/styles/_setting.scss";',
        },
      },
    },
  },
  primevue: {
    components: {
      include: ["Paginator"],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
