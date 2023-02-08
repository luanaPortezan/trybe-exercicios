// src/experimento-json.js

// --------------- Interpretando conteúdo JSON com express.json ---------------

// src/app.js

const express = require('express');
const app = express();

app.post('/fail', (req, res) => {
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});

app.use(express.json());

app.post('/hello', (req, res) => {
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` }); // req.body agora está disponível
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });

// Um middleware bastante utilizado é o express.json, ele é um middleware que lê o conteúdo da requisição HTTP, interpreta os conteúdos como JSON e cria no objeto req uma propriedade body com o valor encontrado no conteúdo.

// A função express.json() utilizada na linha app.use(express.json()) cria um middleware que processa corpos de requisições escritos em JSON. Se executarmos nossa API e fizermos uma requisição do tipo POST, conseguiremos ter acesso aos valores enviados no body da requisição. Porém, se tirarmos o uso deste middleware, você perceberá que as requisições do tipo POST não conseguem processar os dados enviados no body da requisição.

// Faça o teste: copie o script abaixo, cole-o em um arquivo chamado src/experimento-json.js e execute-o com o comando node src/experimento-json.js. Em seguida, realize a request POST localhost:3000/hello, passando o JSON { "nome": "<seu nome aqui">" }.

//💡 Experimente agora realizar a request POST localhost:3000/fail, passando o JSON { "nome": "<seu nome aqui">" }. Perceba que, sem o express.json, req.body fica undefined e você verá um erro.