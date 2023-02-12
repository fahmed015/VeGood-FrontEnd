import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCFre4jl0jwybZjnPMpjjwAsNjUp00GvjA",
    authDomain: "test-2e395.firebaseapp.com",
    projectId: "test-2e395",
    storageBucket: "test-2e395.appspot.com",
    messagingSenderId: "29779093544",
    appId: "1:29779093544:web:d582622f250c873e35ed1d",
    measurementId: "G-RH3TY2YT5Y"
  }
  
  firebase.initializeApp(firebaseConfig)

  export default firebase


