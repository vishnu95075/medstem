const express = require('express');
const {
    addDoctor,
    getAllDoctor,
    deleteDoctor,
    updateDoctor
} = require('../controllers/doctorController');

const router = express.Router();

// Create Doctor 
router.route("/doctor").post(addDoctor);

// Get All Doctor 
router.route("/doctor").get(getAllDoctor);

// Delete Doctor  By Id
router.route("/doctor/:id").delete(deleteDoctor);

// Update Doctor  By Id
router.route("/doctor/:id").patch(updateDoctor);

module.exports = router;