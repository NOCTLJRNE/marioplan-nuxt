import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  generate: {
    fallback: true
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyAxM6O9R5awDgJK9pF0WaD43uDlQmPtvcU",
          authDomain: "react-redux-firebase-b2144.firebaseapp.com",
          databaseURL: "https://react-redux-firebase-b2144.firebaseio.com",
          projectId: "react-redux-firebase-b2144",
          storageBucket: "react-redux-firebase-b2144.appspot.com",
          messagingSenderId: "288232662118",
          appId: "1:288232662118:web:1aa1d6c9a9334f3fef79a7",
          measurementId: "G-TSYCS7TNJ8"
        },
        services: {
          auth: {
            persistence: "local",
            initialize: {
              // onAuthStateChangedMutation: "SET_AUTH_USER",
              onAuthStateChangedAction: "onAuthStateChanged"
            },
            ssr: false // default
          },
          firestore: true
        }
      }
    ]
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ["vee-validate"],
    extend(config, ctx) {}
  }
};
