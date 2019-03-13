import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCYnyMMcBybcYgJSc2t9nKk95yH0A2aPxE",
    authDomain: "treet-meet.firebaseapp.com",
    databaseURL: "",
    projectId: "treet-meet",
    storageBucket: "",
    messagingSenderId: ""
};

export const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();
providerFacebook.addScope('user_birthday');
export {providerFacebook};
export default firebase.initializeApp(config);