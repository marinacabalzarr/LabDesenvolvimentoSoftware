const express = require('express');
const cors = require('cors');
const alunoRoutes = require('./src/routes/AlunoRoutes');
const empresaRoutes = require('./src/routes/EmpresaParceiraRoutes');
const professorRoutes = require('./src/routes/ProfessorRoutes');
const transacaoRoutes = require('./src/routes/TransacaoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/alunos', alunoRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api', professorRoutes);
app.use('/api', transacaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:3001', 
  credentials: true
}));

const vantagemRoutes = require('./src/routes/VantagemRoutes');
app.use('/api', vantagemRoutes);
