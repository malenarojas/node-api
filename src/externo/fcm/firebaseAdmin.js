const admin = require('firebase-admin');
// import admin from 'firebase-admin';
// import firebaseConfig from './../../config/firebase-admin.json';

const serviceAccount = require('./../config/firebase-admin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
