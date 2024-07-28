const nodemailer = require('nodemailer');
const Email = require('../models/emailModel');

// Configuração do transportador de e-mail usando o Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail', // Corrigido de 'Gmail' para 'gmail'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Enviar e-mail
exports.sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  // Verificar se os campos obrigatórios estão presentes
  if (!to || !subject || !text) {
    return res.status(400).json({ message: 'Campos "to", "subject" e "text" são obrigatórios.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error); // Adiciona um log para depuração
    res.status(500).json({ message: 'Erro ao enviar e-mail', error: error.message });
  }
};

// Adicionar e-mail ao banco de dados
exports.saveEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  // Verificar se os campos obrigatórios estão presentes
  if (!to || !subject || !text) {
    return res.status(400).json({ message: 'Campos "to", "subject" e "text" são obrigatórios.' });
  }

  try {
    const email = new Email({ to, subject, text });
    await email.save();
    res.status(201).json({ message: 'E-mail salvo com sucesso!', email });
  } catch (error) {
    console.error('Erro ao salvar e-mail:', error); // Adiciona um log para depuração
    res.status(500).json({ message: 'Erro ao salvar e-mail', error: error.message });
  }
};
