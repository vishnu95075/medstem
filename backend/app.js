const express = require('express');
const app = express();
app.use(express.json());


// Routes Imports
const medicalSpecialties = require('./routes/medicalSpecialtiesRoute');
const doctor = require('./routes/doctorRoute');
const nurse = require('./routes/nurseRoute');
const notificationAlert = require('./routes/notificationAlertRoute');
const notification = require('./routes/notificationRoute');

app.use("/api/v1", medicalSpecialties);
app.use("/api/v1", doctor);
app.use("/api/v1", nurse);
app.use("/api/v1/",notificationAlert);
app.use("/api/v1/",notification);

module.exports = app;