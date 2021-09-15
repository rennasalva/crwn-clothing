import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAcYltZtx9Arel94RwmzLnZnKaCJYqq3F8",
    authDomain: "crwn-db-1d892.firebaseapp.com",
    projectId: "crwn-db-1d892",
    storageBucket: "crwn-db-1d892.appspot.com",
    messagingSenderId: "891152885927",
    appId: "1:891152885927:web:09c555540e0b4805e7d382",
    measurementId: "G-ZC247YDL2C"
};

firebase.initializeApp(config);

export const auth           = firebase.auth();
export const firestore      = firebase.firestore();

const provaider  = new firebase.auth.GoogleAuthProvider();
provaider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provaider);

export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;
    const userRef  = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();  // fetch async
    //console.log('snapShot',snapShot);
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        }
        catch(err){
            console.log('Error retrive user record',err.message);
        }
    }
    return userRef;
}
export default firebase;