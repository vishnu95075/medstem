const express = require('express');
const {
    addNotification,
    getAllNotification,
    deleteNotification,
    updateNotification
} = require('../controllers/notificationController');

const router = express.Router();

// Create Notification Speciality
router.route("/notification").post(addNotification);

// Get All Notification Speciality
router.route("/notification").get(getAllNotification);

// Delete Notification Speciality By Id
router.route("/notification/:id").delete(deleteNotification);

// Update Notification Speciality By Id
router.route("/notification/:id").patch(updateNotification);

module.exports = router;