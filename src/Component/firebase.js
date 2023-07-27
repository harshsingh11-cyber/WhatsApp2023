import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// const firebaseConfig = {
//   apiKey: "AIzaSyB72BVgNNK-2SPhEHqiPfQ9rFv7o8stGFQ",
//   authDomain: "whatsapp-web-clone-efad6.firebaseapp.com",
//   projectId: "whatsapp-web-clone-efad6",
//   storageBucket: "whatsapp-web-clone-efad6.appspot.com",
//   messagingSenderId: "398359030336",
//   appId: "1:398359030336:web:270734b89589da0a424da5"
// };


const firebaseConfig = {
  apiKey: "AIzaSyANBXOrVglMYICuHAQ8xKgkSluWAwLl1eA",
  authDomain: "whatsappnewonelast.firebaseapp.com",
  projectId: "whatsappnewonelast",
  storageBucket: "whatsappnewonelast.appspot.com",
  messagingSenderId: "265237386346",
  appId: "1:265237386346:web:9b28b841a25e7a0e106613"
};


let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export{auth,provider}
export default db;