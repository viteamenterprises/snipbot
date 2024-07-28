const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Rota para registrar novo usuário
router.post('/register', register);

// Rota para autenticar usuário
router.post('/login', login);

module.exports = router;
