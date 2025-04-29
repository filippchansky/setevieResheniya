import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBGas2I1_jxokajFSC7F_POkMPG9NLzQJ0',
  authDomain: 'jewelry-shop-4d36a.firebaseapp.com',
  projectId: 'jewelry-shop-4d36a',
  storageBucket: 'jewelry-shop-4d36a.firebasestorage.app',
  messagingSenderId: '129941919921',
  appId: '1:129941919921:web:d758fed9c9eda62cf02a90',
  // measurementId: 'G-XC96S94QVD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};
