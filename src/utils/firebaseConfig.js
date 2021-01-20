import firebase from "firebase";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD7obIzNkKzpdqKn4i0VI2JGLJA6seO02I",
    authDomain: "fir-auth-55bd8.firebaseapp.com",
    databaseURL: "https://fir-auth-55bd8-default-rtdb.firebaseio.com",
    projectId: "fir-auth-55bd8",
    storageBucket: "fir-auth-55bd8.appspot.com",
    messagingSenderId: "393907623578",
    appId: "1:393907623578:web:6cddc2ca180f701885f123",
    measurementId: "G-J48CSXDRM5"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export default firebase;