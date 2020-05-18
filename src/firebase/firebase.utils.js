import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0roymYGdW_50LfSbEU1DOk_NY44mklD4",
    authDomain: "crwn-db-c2e78.firebaseapp.com",
    databaseURL: "https://crwn-db-c2e78.firebaseio.com",
    projectId: "crwn-db-c2e78",
    storageBucket: "crwn-db-c2e78.appspot.com",
    messagingSenderId: "568398813641",
    appId: "1:568398813641:web:f8cd0197b64cd560d8b018",
    measurementId: "G-DS0Z3JBQKN"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;