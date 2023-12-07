const express = require('express');
const {
    addNurse,
    getAllNurse,
    deleteNurse,
    updateNurse
} = require('../controllers/nurseController');

const router = express.Router();

// Create Nurse 
router.route("/nurse").post(addNurse);

// Get All Nurse 
router.route("/nurse").get(getAllNurse);

// Delete Nurse  By Id
router.route("/nurse/:id").delete(deleteNurse);

// Update Nurse  By Id
router.route("/nurse/:id").patch(updateNurse);


module.exports = router;