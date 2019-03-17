const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyAlhr4y14Z7Vdp4LfcNuXZVClq2DqG5oo0",
    authDomain: "isafireproject.firebaseapp.com",
    databaseURL: "https://isafireproject.firebaseio.com",
    projectId: "isafireproject",
    storageBucket: "isafireproject.appspot.com",
    messagingSenderId: "982056577601"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = app.database();

export const storage = app.storage();

