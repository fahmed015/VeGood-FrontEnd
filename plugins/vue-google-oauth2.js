import Vue from 'vue'
//import * as GAuth from '~/node_modules/vue-google-oauth2'
import GAuth from 'vue-google-oauth2'


Vue.use(GAuth, { clientId: '394838939483-rq7d2rfj39gkdfjd9jenu670ounoi01.apps.googleusercontent.com',
 scope: 'email', prompt: 'select_account',
  fetch_basic_profile: false });