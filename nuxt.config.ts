export default {
  server: {
    host: '0.0.0.0'
  },
  srcDir: 'app/',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '鶴巻智康のポートフォリオ | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@Tonotomo1226'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://roll1226.web.app'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '鶴巻智康のポートフォリオ'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: '鶴巻智康のポートフォリオ'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/roll1226.appspot.com/o/ogp%2FmyportfolioOgp.png?alt=media&token=7a8ef1bc-f213-4e0d-a007-2b637931ea70'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: {
      lang: 'ja'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/scss/styles.scss' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/firebase.ts', mode: 'server' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-fontawesome'
  ],
  /*
   ** FontAwesome
   */
  fontawesome: {
    component: 'fa'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config: any, ctx: any) {// eslint-disable-line
    }
  }
}
