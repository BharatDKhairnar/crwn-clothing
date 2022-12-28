import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC3wc3GZBEkQiNqY_hFGUekf8pydKVGS0k",
    authDomain: "crwn-clothing-be097.firebaseapp.com",
    projectId: "crwn-clothing-be097",
    storageBucket: "crwn-clothing-be097.appspot.com",
    messagingSenderId: "994231048085",
    appId: "1:994231048085:web:179c7fc9e3c578019b489c",
    measurementId: "G-E9C4KQ54LP"
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

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;