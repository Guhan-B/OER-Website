import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyC3oM2MEB35T3tHh8o-wQ-b60ddlKczVCY",
         authDomain: "nuxtjs-prod.firebaseapp.com",
         projectId: "nuxtjs-prod",
        storageBucket: "nuxtjs-prod.appspot.com",
         messagingSenderId: "833768377304",
         appId: "1:833768377304:web:539f110fbb734fb3dfc0ad",
         measurementId: "G-ZXV9XB375D"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore();
const fireAuth = firebase.auth();
export {fireDb,fireAuth};