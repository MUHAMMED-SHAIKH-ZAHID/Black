import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAmgf0sG6xxesf02MK0O1xUlFJP4104gjI",
    authDomain: "olx-clone-67e28.firebaseapp.com",
    projectId: "olx-clone-67e28",
    storageBucket: "olx-clone-67e28.appspot.com",
    messagingSenderId: "821275869802",
    appId: "1:821275869802:web:ac168a2d38203d0dae8013",
    measurementId: "G-YSJD3G8V7X"
  };

  export default firebase.initializeApp(firebaseConfig)