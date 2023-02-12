import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default new Vuetify({
 
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







})