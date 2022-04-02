export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Travel Guide',
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway&display=swap' },
      { rel: 'stylesheet', media: 'print', onload: 'this.media="all"', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway&display=swap' }
    ],
    __dangerouslyDisableSanitizers: ['script', 'noscript'],
    noscript: [
      { innerHTML: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway&display=swap" />' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    svgo: {
      plugins: [
        { reusePaths: true },
        { removeOffCanvasPaths: true },
        { removeScriptElement: true }
      ]
    }
  },
  /*
   ** Build configuration
   */
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  }
}
