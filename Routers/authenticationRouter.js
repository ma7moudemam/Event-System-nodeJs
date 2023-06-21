const express = require('express');
const router = express.Router();
const {body ,query , param } = require('express-validator');



router.post('/login');
router.post('/register');


module.exports = router;