importScripts("https://www.gstatic.com/firebasejs/10.12.4/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.4/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDcidrDS8oU5a3f5ByIiDGCej-8WCcBL6A",
  authDomain: "kryzox-2212.firebaseapp.com",
  projectId: "kryzox-2212",
  storageBucket: "kryzox-2212.appspot.com",
  messagingSenderId: "277643674149",
  appId: "1:277643674149:android:7f3ecd6f09935ff39a75cc",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
