import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDg3XjPdJCr353qg_OMymZOzgaCgEgHMeM',
      libraries: 'places', // This is required if you use the Autocomplete plugin
      
    },
   
  });