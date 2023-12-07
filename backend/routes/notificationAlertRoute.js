const express = require('express');
const {
    addNotificationAlert,
    getAllNotificationAlert,
    deleteNotificationAlert,
    updateNotificationAlert
} = require('../controllers/notificationAlertController.js');

const router = express.Router();

// Create Notification-Alert Speciality
router.route("/notification-alert").post(addNotificationAlert);

// Get All Notification-Alert Speciality
router.route("/notification-alert").get(getAllNotificationAlert);

// Delete Notification-Alert Speciality By Id
router.route("/notification-alert/:id").delete(deleteNotificationAlert);

// Update Notification-Alert Speciality By Id
router.route("/notification-alert/:id").patch(updateNotificationAlert);

module.exports = router;