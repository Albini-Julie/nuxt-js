// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel:"stylesheet",
          href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap"
        }
      ]
    }
  },
  devtools: {
    enabled: true,
    },
    components: [{
      path:'~/components',
      pathPrefix: false
    }],
    modules: ['@nuxtjs/prismic', '@pinia/nuxt'],
    prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
    css:['@/scss/main.scss'],
    runtimeConfig: {
      public: {
        apiUrl: ''
      }
    },
    vite: {
      css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/foundations/_variables.scss";
        @import "@/scss/foundations/_mixins.scss";`
      }}}
  }
})