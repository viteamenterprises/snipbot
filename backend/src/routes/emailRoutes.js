const express = require('express');
const router = express.Router();
const { sendEmail, saveEmail } = require('../controllers/emailController');

// Rota para enviar e-mail
router.post('/send', sendEmail);

// Rota para salvar e-mail
router.post('/save', saveEmail);

module.exports = router;
