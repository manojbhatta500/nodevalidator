const express = require('express');

const {handleRootGet,handleRootPost} = require('../controller/user.controller')


const router = express.Router();



router.get('/',handleRootGet);

router.post('/',handleRootPost);




module.exports = router;





