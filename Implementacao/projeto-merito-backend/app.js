const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const alunoRoutes = require('./routes/AlunoRoutes');
const professorRoutes = require('./routes/ProfessorRoutes');
const transacaoRoutes = require('./routes/TransacaoRoutes');
const vantagemRoutes = require('./routes/VantagemRoutes');
const compraRoutes = require('./routes/CompraRoutes'); // se existir

app.use('/api/alunos', alunoRoutes);
app.use('/api/professores', professorRoutes);
app.use('/api/transacoes', transacaoRoutes);
app.use('/api/vantagens', vantagemRoutes);
app.use('/api/compras', compraRoutes); // se já criou

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
