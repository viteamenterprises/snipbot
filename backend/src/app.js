const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api/emails', emailRoutes);

// Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/automacao', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Inicializa o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
