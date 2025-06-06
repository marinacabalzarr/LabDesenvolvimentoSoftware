const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const alunoRoutes = require('./src/routes/AlunoRoutes');
const professorRoutes = require('./src/routes/ProfessorRoutes');
const vantagemRoutes = require('./src/routes/VantagemRoutes');
const compraRoutes = require('./src/routes/CompraRoutes');
const empresaRoutes = require('./src/routes/EmpresaParceiraRoutes');
const transacaoRoutes = require('./src/routes/TransacaoRoutes');

app.use('/alunos', alunoRoutes);
app.use('/professores', professorRoutes);
app.use('/vantagens', vantagemRoutes);
app.use('/compras', compraRoutes);
app.use('/empresas', empresaRoutes); 
app.use('/transacoes', transacaoRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});