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
    title: '鶴巻智康のポートフォリオ' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'robots',
        content: 'noindex'
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
    extend(config: any, ctx: any) { // eslint-disable-line
    }
  }
}
