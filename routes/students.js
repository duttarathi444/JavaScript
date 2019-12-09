const express = require('express');

const studentController = require('../controllers/studentControl');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/studentSignin', auth, studentController.studentLogin);

router.post('/studentSignup', auth, studentController.studentReg);

router.post('/studentSignupData', auth, studentController.studentRegData);

router.post('/studentSigninData', auth, studentController.studentLoginData);

router.post('/showStudentDetails', auth, studentController.showStudents)

router.post('/studentEdit', auth, studentController.studentDataEdit);

router.post('/studentUpdateData', auth, studentController.studentUpdate);

router.post('/studentDetails', auth, studentController.showDetails);

router.post('/isexist', auth, studentController.isEmailExist);

router.post('/alltest', auth, studentController.tests);

router.post('/lists', auth, studentController.list);

module.exports = router;