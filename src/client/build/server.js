// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Servir arquivos estáticos da pasta 'public' do React
app.use(express.static(path.join(__dirname, 'client/build')));

// Rota para lidar com as solicitações de dados de volumetria de chuva
app.post('/api/rainfall', (req, res) => {
  // Processar os dados recebidos do cliente
  console.log('Dados de volumetria de chuva recebidos:', req.body);

  // Retornar uma resposta para o cliente
  res.json({ message: 'Dados recebidos com sucesso!' });
});

// Rota para servir a aplicação React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

