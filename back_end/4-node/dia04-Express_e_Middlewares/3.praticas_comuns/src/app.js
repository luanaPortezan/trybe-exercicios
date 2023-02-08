const express = require('express');
require('express-async-errors');

const validateTeamId = require('./middlewares/validateTeamId');
const validateTeamData = require('./middlewares/validateTeamData');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials');

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

app.use(express.json());
app.use(apiCredentials);


app.get('/teams', (req, res) => res.json(teams));

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
  if (
    !req.teams.teams.includes(req.body.sigla) // confere se a sigla proposta está inclusa nos times autorizados
    && teams.every((t) => t.sigla !== req.body.sigla) // confere se já não existe um time com essa sigla.
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'}); // **
  }
//   const requiredProperties = ['nome', 'sigla'];
//   if (requiredProperties.every((property) => property in req.body)) {
    const newTeam = { id: nextId, ...req.body };
    teams.push(newTeam);
    nextId += 1;
    res.status(201).json(newTeam);
//   } else {
//     res.sendStatus(400);
//   }
});

// Prontinho, agora você também já aprendeu a empregar a passagem de valores entre middlewares e pode dar check em mais uma habilidade do dia! 🤩 Obs: conferir o passo anterior em apiCredentials.js

// **
// Reparou que no middleware do POST /teams nós usamos return dentro do bloco if? Fizemos isso porque, em Javascript, return encerra a função. É exatamente isso que queremos! Depois de enviar uma resposta não precisamos seguir na função. Se seguirmos, vamos ver um erro extremamente comum no desenvolvimento backend:
// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
// O que essa mensagem está tentando dizer é que você não pode enviar mais de uma resposta para uma requisição. Quando passamos pela linha que diz return res.status(400).json({ message: 'Já existe um time com essa sigla'}), estamos enviando uma resposta. Se depois do bloco if continuamos a função, chegaremos na linha que diz res.status(201).json(...), ocorrendo em enviar outra resposta. E isso é um erro!

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
