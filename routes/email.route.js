const express = require('express');
const {checkEmail,emailGetController} = require('../controller/email.controller');

const router = express.Router();


router.get('/',emailGetController);


router.post('/',checkEmail);



module.exports = router;