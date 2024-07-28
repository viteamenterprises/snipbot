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


//teste app 2!!! 

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const emailRoutes = require('./routes/emailRoutes');
// const videoRoutes = require('./routes/videoRoutes');
// const authRoutes = require('./routes/authRoutes');

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Conectar ao banco de dados
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Conectado ao MongoDB'))
//   .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// // Rotas
// app.use('/api/emails', emailRoutes);
// app.use('/api/videos', videoRoutes);
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });
