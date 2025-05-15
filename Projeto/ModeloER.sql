CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE Aluno (
    id INT PRIMARY KEY REFERENCES Usuario(id),
    cpf VARCHAR(14) UNIQUE NOT NULL,
    rg VARCHAR(20) NOT NULL,
    endereco VARCHAR(150),
    curso VARCHAR(100),
    moeda INT DEFAULT 0,
    instituicao_id INT REFERENCES Instituicao(id)
);

CREATE TABLE Professor (
    id INT PRIMARY KEY REFERENCES Usuario(id),
    cpf VARCHAR(14) UNIQUE NOT NULL,
    departamento VARCHAR(100),
    moeda INT DEFAULT 0,
    instituicao_id INT REFERENCES Instituicao(id)
);

CREATE TABLE EmpresaParceira (
    id INT PRIMARY KEY REFERENCES Usuario(id),
    cnpj VARCHAR(18) UNIQUE NOT NULL
);

CREATE TABLE Instituicao (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE Vantagem (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    custoEmMoedas INT NOT NULL,
    imagem TEXT,
    empresaParceira_id INT REFERENCES EmpresaParceira(id)
);

CREATE TABLE Transacao (
    id SERIAL PRIMARY KEY,
    data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    valor INT NOT NULL,
    tipo VARCHAR(50),
    mensagem TEXT,
    remetente_id INT REFERENCES Usuario(id),
    destinatario_id INT REFERENCES Usuario(id)
);
