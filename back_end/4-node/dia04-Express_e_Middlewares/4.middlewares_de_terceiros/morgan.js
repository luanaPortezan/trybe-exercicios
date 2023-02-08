// -------------- Gerando logs da aplicação com morgan ------------

// Um log nada mais é do que um registro organizado e consistente de todas as ocorrências de um evento. Logs são fundamentais para reconhecer bugs em uma aplicação web, dando visibilidade para a frequência e as condições em que os bugs ocorreram. E como você nunca sabe quando um bug vai acontecer, é conveniente ter um log de todas as requisições recebidas.

// Você pode escrever seu próprio middleware usando console.log. Apenas lembre-se que o console.log vai imprimir no terminal que executa seu app, não nas respostas enviadas aos clientes.

// app.use((req, _res, next) => {
//   console.log('req.method:', req.method);
//   console.log('req.path:', req.path);
//   console.log('req.params:', req.params);
//   console.log('req.query:', req.query);
//   console.log('req.headers:', req.headers);
//   console.log('req.body:', req.body);
//   next();
// });

// A comunidade open-source tem um pacote muito conveniente para esse fim chamado morgan. Depois de instalar com npm install morgan@1.10.0 --save-exact, basta configurar esse middleware e ele vai emitir uma mensagem para cada requisição recebida:

// src/app.js

const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
//...
const app = express();
app.use(morgan('dev'));
app.use(express.static('./images'));