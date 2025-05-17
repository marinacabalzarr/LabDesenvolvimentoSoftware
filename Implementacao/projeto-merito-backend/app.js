const express = require('express');
const cors = require('cors');
const alunoRoutes = require('./src/routes/AlunoRoutes');
const empresaRoutes = require('./src/routes/EmpresaParceiraRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/alunos', alunoRoutes);
app.use('/api/empresas', empresaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:3001', // Porta do frontend
  credentials: true
}));