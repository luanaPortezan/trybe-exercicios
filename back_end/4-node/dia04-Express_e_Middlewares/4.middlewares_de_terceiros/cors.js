// ------------ Liberando acesso ao frontend com cors ----------------------

// Outro middleware bem comum nas aplicações back-end é o cors, que permite que outras aplicações front-end consumam sua API. O uso básico desse módulo consiste em instalá-lo usando npm install cors@2.8.5 --save-exact e em seguida adicionar as seguintes linhas no seu código:

// src/app.js

const cors = require('cors');
app.use(cors());

// Quando uma aplicação frontend é carregada em um endereço (localhost:3000) e tenta acessar uma API em outro endereço (localhost:3001), o navegador primeiro perguntará à API se essa aplicação pode fazer essas requisições. Esse é um recurso de segurança presente em todos os navegadores modernos. Antes de existir CORS, os navegadores simplesmente não enviavam requisições de aplicações para outros endereços.

// Com o cors configurado, nosso back-end vai deixar o navegador enviar requisições para nossa API. Sem o cors, o navegador bloquearia as requests do nosso front-end para nossa API. O middleware cors tem um conjunto de configurações que permitem criar regras específicas, limitando quem pode fazer requisições e quais requisições podem ser feitas.

// Por enquanto, você não precisa se preocupar com isso, já que está focando no desenvolvimento do back-end. Um ambiente de produção, no entanto, exigiria essa configuração para permitir a integração com o frontend. Quando essa hora chegar, leia a documentação.