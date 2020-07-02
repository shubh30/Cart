import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore'; 
 
const firebaseConfig = {
  apiKey: "AIzaSyCfPxItXuze4ehLtAOP4I4Hgif0a_2sAWU",
  authDomain: "cart-a274b.firebaseapp.com",
  databaseURL: "https://cart-a274b.firebaseio.com",
  projectId: "cart-a274b",
  storageBucket: "cart-a274b.appspot.com",
  messagingSenderId: "400027515386",
  appId: "1:400027515386:web:ca985dcc2cabcd9c7f4c43"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

