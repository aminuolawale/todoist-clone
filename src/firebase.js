import firebase from "firebase/app";
import "firebase/firestore";
const firebaseCredentials = {
  apiKey: "AIzaSyDSTS53jj6KwJAUyQGjfShaHljB03GZt3w",
  authDomain: "todoist-clone-134ad.firebaseapp.com",
  projectId: "todoist-clone-134ad",
  storageBucket: "todoist-clone-134ad.appspot.com",
  messagingSenderId: "590175002193",
  appId: "1:590175002193:web:bb98bc003e6251a066a270",
};
const firebaseConfig = firebase.initializeApp(firebaseConfig)

export { firebaseConfig as firebase };
