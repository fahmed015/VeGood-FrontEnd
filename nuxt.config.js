import colors from 'vuetify/es5/util/colors'
const fs = require('fs')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head


  head: {
    titleTemplate: '%s - nuxtapp',
    title: 'nuxtapp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],


  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/i18n.js",'~/plugins/infiniteloading.js',{ src: '~/plugins/vue2-google-maps.js' },
  { src: '~/plugins/autocomplete.js', ssr: false},  "~/plugins/modal.js" , "~/plugins/chart.js",{ src:"~/plugins/fullstory.js", ssr: false} ],



  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify','@nuxtjs/google-analytics'
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios','@nuxtjs/auth-next','@nuxtjs/proxy' ,'vue-geolocation-api/nuxt',
  ['vue-scrollto/nuxt', { duration: 300, x: false,
    y: true }],'nuxt-ssr-cache','@nuxtjs/firebase'


  


  ],

  
  axios: {
   
    proxy: true,
    
  },
  proxy: {
    '/api6/': { target: 'https://vegoodeg.pythonanywhere.com/users/dj-rest-auth', pathRewrite: {'^/api6/': ''}, changeOrigin: true},
    '/api7/': { target: 'https://vegoodeg.pythonanywhere.com/dj-rest-auth', pathRewrite: {'^/api7/': ''}, changeOrigin: true},


    '/api/': { target: 'https://vegoodeg.pythonanywhere.com/api', pathRewrite: {'^/api/': ''}, changeOrigin: true },
    '/api2/': { target: 'https://maps.googleapis.com/maps/api', pathRewrite: {'^/api2/': ''}, changeOrigin: true},
    
    '/api3/': { target: 'https://vegoodeg.pythonanywhere.com/users/dj-rest-auth', pathRewrite: {'^/api3/': ''}, changeOrigin: true},
    '/api4/': { target: 'https://vegoodeg.pythonanywhere.com/v1/api', pathRewrite: {'^/api4/': ''}, changeOrigin: true},


  
    


  },


  geolocation:  {
    // watch: true,
  },



  auth: {

    redirect: {
      login: '/Home/login',
      logout: '/Home',
      
      home: '/Home'
    },
    

    strategies: {
      local: {

        scheme: 'refresh',

        token: {
          property: 'access_token'
       
         
          // required: true,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh',
          
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api3/login/', method: 'post' },
          refresh: { url: '/api6/token/refresh/', method: 'post'  },
          user: {url: '/api/users/me/', method: 'get'},
          logout: { url: '/api3/logout/', method: 'post' },

        }
      },

      facebook: {

       
        scheme: 'oauth2',

        endpoints: {
          userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}',
          authorization: 'https://www.facebook.com/v10.0/dialog/oauth?',
          token:{ url: '/api7/facebook/', method: 'post' }

        
        },
        token: {
          property: 'access_token',
       
          type: 'Bearer',
          maxAge: 1800
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh',
          
        },
        responseType: 'token',
      grantType: 'authorization_code',
      accessType: undefined,
      redirectUri: 'http://localhost:3000/Home',
      logoutRedirectUri: undefined,
       
        clientId: '136236588438031',
        scope: ['public_profile', 'email'],
        state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: '',
      responseMode: '',
      acrValues: '',
      },
      google: {

        scheme: 'oauth2',
      
        clientId: '897206146497-8l6sq58dtpbh49dss6v9u3khhj1m36j4.apps.googleusercontent.com',
        codeChallengeMethod: '',

      },


    








     
    }

  },


  googleAnalytics: {
    id: 'UA-189517955-1',
    autoTracking: {
      screenview: true
    },
    debug: {
      enabled: true,
      sendHitTask:true
    }
  },







  
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
   
    customVariables: ['~/assets/variables.scss'],
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
  
  
  
  
  
  
  
    theme: {
      themes: {
        options: {
          customProperties: true,
      },
        light: {
          primary: "#14C6FF",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
         theme2:"#FFA100",
         theme1:"#B8DE6F",
         headercolor:"#002A22",
         grey:"#C5C5C5",
         theme5:"#B6C8BF",
         theme3:"#D7DDDA",
         theme4:"#F0F9F4",
         grey2:"#707070",
        }
      }
    }

  },



  














  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   
  },

  router: {
   
    middleware: ['auth']
  },
  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: false,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      '/',
     
 
     
    ],
    
    key(route, context) {
      // custom function to return cache key, when used previous
      // properties (useHostPrefix, pages) are ignored. return 
      // falsy value to bypass the cache
    },
 
    store: {
      type: 'memory',
 
      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,
 
      // number of seconds to store this page in cache
      ttl: 86400,
    },
  },
  

  firebase: {
    config: {
    apiKey: "AIzaSyCFre4jl0jwybZjnPMpjjwAsNjUp00GvjA",
    authDomain: "test-2e395.firebaseapp.com",
    projectId: "test-2e395",
    storageBucket: "test-2e395.appspot.com",
    messagingSenderId: "29779093544",
    appId: "1:29779093544:web:d582622f250c873e35ed1d",
    measurementId: "G-RH3TY2YT5Y"
    },
    services: {
      messaging:  {
        createServiceWorker: true,
        fcmPublicVapidKey: 'BL2044-jalgbmipSjgBV2I46ULPa6-tHMDtFdjbMVcWfh9XHOueLFkbXnjeyUy8fddI8Dk82xYutuWhJ6EFJ0AU', //see step 7
        inject: fs.readFileSync('./serviceWorker.js') //see step 8
      },
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000, // default
          minimumFetchIntervalMillis: 43200000, // default
        },
        defaultConfig: {
          'welcome_message': 'Welcome'
        }
      }
    },
   
    
 },


}
