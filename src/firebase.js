//   import {initializeApp} from 'firebase/app'
//   import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore';
//   // import { getDatabase } from "firebase/database";
//   const firebaseConfig = {
//     apiKey: "AIzaSyBRzalF_CD8GFJ9yFyRzzoaUGqgm2dFmog",
//     authDomain: "disneyplus-clone-197ed.firebaseapp.com",
//     projectId: "disneyplus-clone-197ed",
//     storageBucket: "disneyplus-clone-197ed.appspot.com",
//     messagingSenderId: "292316411886",
//     appId: "1:292316411886:web:2983c5eb9740e94ea240ff",
//     measurementId: "G-K6REQGRJ9L"
//   };


// const app = initializeApp(firebaseConfig)
// // const db = getDatabase(app)
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider()
// const firestore = getFirestore(app);

// export {auth,provider}; 
// export default firestore;






///////////////////////////////////////////////////////////////////////////////////
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRzalF_CD8GFJ9yFyRzzoaUGqgm2dFmog",
  authDomain: "disneyplus-clone-197ed.firebaseapp.com",
  projectId: "disneyplus-clone-197ed",
  storageBucket: "disneyplus-clone-197ed.appspot.com",
  messagingSenderId: "292316411886",
  appId: "1:292316411886:web:2983c5eb9740e94ea240ff",
  measurementId: "G-K6REQGRJ9L"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
// const storage = firebase.storage();
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = firebase.firestore();
export { auth, provider, storage,firebaseApp};
export default db; 