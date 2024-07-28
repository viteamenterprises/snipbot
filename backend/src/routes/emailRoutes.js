const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/create', emailController.createEmail);
router.post('/confirm', emailController.confirmEmail);

module.exports = router;
