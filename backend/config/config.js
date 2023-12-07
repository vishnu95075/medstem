const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://test-bc7a7-default-rtdb.firebaseio.com/', // Replace with your database URL
});
const db = admin.firestore();
module.exports = db;