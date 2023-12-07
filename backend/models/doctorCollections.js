const db = require('../config/config');
const doctorCollectionRef = db.collection("Doctors");

module.exports = doctorCollectionRef;