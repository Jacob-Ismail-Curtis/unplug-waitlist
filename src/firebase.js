/* eslint-disable import/no-extraneous-dependencies */
// src/firebase.js
import { initializeApp } from 'firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAZLG6MlHKD3NSZirVCjHc04haDWoS2ySQ',
  authDomain: 'unplug-ec0c8.firebaseapp.com',
  projectId: 'unplug-ec0c8',
  storageBucket: 'unplug-ec0c8.appspot.com',
  messagingSenderId: '972396344063',
  appId: '1:972396344063:web:995af0cf67e4e5183092ca',
  measurementId: 'G-DRSK5DF9DV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
