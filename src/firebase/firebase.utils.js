import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDVosdRJTiH885nAh8Z7y16DbRQhqEcniQ",
    authDomain: "crwn-clothing-6e720.firebaseapp.com",
    projectId: "crwn-clothing-6e720",
    storageBucket: "crwn-clothing-6e720.appspot.com",
    messagingSenderId: "891672763100",
    appId: "1:891672763100:web:25c1ac8e1a725940db3219",
    measurementId: "G-NZNEVVDDSZ"
  };
  

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user',error.message);
      }
    }
console.log(userRef);
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;