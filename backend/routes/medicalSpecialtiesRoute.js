const express = require('express');
const {
    addMedicalSpeciality,
    getAllMedicalSpeciality,
    deleteMedicalSpeciality,
    updateMedicalSpeciality
} = require('../controllers/medicalSpecialtiesController');

const router = express.Router();

// Create Medical-Speciality
router.route("/medical-speciality").post(addMedicalSpeciality);

// Get All Medical-Speciality
router.route("/medical-speciality").get(getAllMedicalSpeciality);

// Delete Medical-Speciality By Id
router.route("/medical-speciality/:id").delete(deleteMedicalSpeciality);


// Update Medical-Speciality By Id
router.route("/medical-speciality/:id").patch(updateMedicalSpeciality);


module.exports = router;