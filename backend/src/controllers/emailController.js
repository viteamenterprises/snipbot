const EmailService = require('../services/emailService');

exports.createEmail = async (req, res) => {
  try {
    const tempEmail = await EmailService.createTempEmail();
    res.status(200).json({ email: tempEmail });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar e-mail temporário' });
  }
};

exports.confirmEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const confirmation = await EmailService.confirmEmail(email);
    res.status(200).json({ message: 'E-mail confirmado', confirmation });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao confirmar e-mail' });
  }
};