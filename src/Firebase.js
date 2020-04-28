import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAcD5WnrNG66ARfijEINN3-qKvECOTG2IM",
  authDomain: "citas-545b9.firebaseapp.com",
  databaseURL: "https://citas-545b9.firebaseio.com",
  projectId: "citas-545b9",
  storageBucket: "citas-545b9.appspot.com",
  messagingSenderId: "16191823011",
  appId: "1:16191823011:web:848142ed7337375b4f3316",
  measurementId: "G-0CM1ETZ568"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;
