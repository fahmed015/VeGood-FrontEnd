
importScripts(
  'https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyCFre4jl0jwybZjnPMpjjwAsNjUp00GvjA","authDomain":"test-2e395.firebaseapp.com","projectId":"test-2e395","storageBucket":"test-2e395.appspot.com","messagingSenderId":"29779093544","appId":"1:29779093544:web:d582622f250c873e35ed1d","measurementId":"G-RH3TY2YT5Y"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// self.addEventListener('push', function (e) {
// data = e.data.json();
//   var options = {
//     body: data.notification.body,
//     icon: data.notification.icon,
//     vibrate: [100, 50, 100],
//     data: {
//     dateOfArrival: Date.now(),
//     primaryKey: '2'
//   },
// };
// });

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.3.3/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
//
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
