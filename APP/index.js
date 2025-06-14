const express = require('express');
const app = express();
const db = require('./config/database');
const alunoRoutes = require('./routes/alunoRoutes');

app.use(express.json());
app.use('/alunos', alunoRoutes);

const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  console.log('Banco de dados sincronizado.');
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch(err => console.error('Erro ao conectar com o banco de dados:', err));
