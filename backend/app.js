const express = require('express');
const app = express();
app.use(express.json());


// Routes Imports

const notificationAlert = require('./routes/notificationAlertRoute');
const notification = require('./routes/notificationRoute');

app.use("/api/v1/",notificationAlert);
app.use("/api/v1/",notification);

module.exports = app;