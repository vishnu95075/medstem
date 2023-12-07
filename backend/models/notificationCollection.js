const db = require('../config/config');
const notificationCollectionRef = db.collection("Notification");

module.exports = notificationCollectionRef;