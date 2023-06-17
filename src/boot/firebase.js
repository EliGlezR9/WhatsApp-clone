import firebase from "firebase/app"

import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy8XenMMiPYP3OV34Uc5WfA01TFOIs2L0",
  authDomain: "quasar-whatsapp.firebaseapp.com",
  databaseURL: "https://quasar-whatsapp-default-rtdb.firebaseio.com",
  projectId: "quasar-whatsapp",
  storageBucket: "quasar-whatsapp.appspot.com",
  messagingSenderId: "465061044089",
  appId: "1:465061044089:web:89a9cbf8418ea1567559a8"
}

// Initialize Firebase
const firebseApp = initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth()

export { firebaseAuth }