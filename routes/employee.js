const express = require('express');
//const path = require('path');

const employee = require('../controllers/testCenterControl');

//const rootdir = require('../util/path');
const router = express.Router();

router.get('/',employee.signin_employee);

router.post('/signinData',employee.checkData);

router.get('/signup',employee.signup_employee);

router.post('/signupData',employee.addData);

router.get('/logout',employee.logoutSession);

module.exports = router;
