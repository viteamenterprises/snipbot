const axios = require('axios');
const Email = require('../models/emailModel'); // Usado se você estiver armazenando emails no MongoDB
const seleniumHelper = require('../utils/seleniumHelper.js');

exports.createTempEmail = async () => {
  try {
    const response = await axios.get('https://www.emailnator.com/');
    const tempEmail = response.data.email;
    const email = new Email({ address: tempEmail });
    await email.save();
    return tempEmail;
  } catch (error) {
    throw new Error('Erro ao criar e-mail temporário');
  }
};

exports.confirmEmail = async (email) => {
  try {
    const confirmation = await seleniumHelper.confirmEmail(email);
    await Email.updateOne({ address: email }, { confirmed: true });
    return confirmation;
  } catch (error) {
    throw new Error('Erro ao confirmar e-mail');
  }
};
