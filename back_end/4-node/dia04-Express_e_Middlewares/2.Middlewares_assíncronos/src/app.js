const express = require('express');
require('express-async-errors'); // não precisa definir uma variável
const validateTeamId = require('./middlewares/validateTeamId');
const validateTeamData = require('./middlewares/validateTeamData');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials'); // importando!!!

let nextId = 3;
const teams = [
  { id: 1,
    nome: 'São Paulo Futebol Clube',
    sigla: 'SPF' 
  },
  { id:2,
    nome: 'Sociedade Esportiva Palmeiras',
    sigla: 'PAL' 
  },
];

// Aqui é importante destacar que o app.use só afeta as rotas que vem abaixo da sua definição. Ou seja, todas as rotas da API de times vão passar pelo middleware de autenticação.
app.use(express.json());
app.use(apiCredentials);

// POREEEM!! Se você deseja liberar a rota GET /teams para todos, mas exigir credenciais para as demais rotas, precisa mudar a ordem dessa configuração.Veja como fazer isso no exemplo abaixo:

app.get('/teams', (req, res) => res.json(teams)); // não precisa passar pelo apiCredentials pra chegar aqui

// app.use(apiCredentials); // se chegou até aqui, então vai passar pelo apiCredentials

// app.post('/teams', ...);// só vai chegar aqui se tiver credenciais
// app.put('/teams', ...);

// 👀 como configurar um middleware global, ou seja, que intercepta todas ou quase todas as rotas. 🚀 


app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', validateTeamId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

app.post('/teams', validateTeamData, (req, res) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    const newTeam = { id: nextId, ...req.body };
    teams.push(newTeam);
    nextId += 1;
    res.status(201).json(newTeam);
  } else {
    res.sendStatus(400);
  }
});

// {
//   "nome": "Clube de Regatas do Flamengo",
//   "sigla": "FLA"
// }

app.put('/teams/:id', validateTeamId, validateTeamData, (req, res) => {
  const id = Number(req.params.id);
  const requiredProperties = ['nome', 'sigla'];
  const updateTeam = teams.find(t => t.id === id);
  if (updateTeam && requiredProperties.every((property) => property in req.body)) {
    const index = teams.indexOf(updateTeam);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

app.delete('/teams/:id', validateTeamId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});


module.exports = app;
