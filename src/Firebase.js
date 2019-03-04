import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyALUompkRx4oLHgefSo-4T6XyMYn6CmjMI",
    authDomain: "woodruffaustin-6e88a.firebaseapp.com",
    databaseURL: "https://woodruffaustin-6e88a.firebaseio.com",
    projectId: "woodruffaustin-6e88a",
    storageBucket: "woodruffaustin-6e88a.appspot.com",
    messagingSenderId: "1006214065341"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
