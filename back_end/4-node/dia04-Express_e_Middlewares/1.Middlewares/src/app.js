const express = require('express');


const app = express();

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

// não precisa do sufixo .js, o node sabe deduzir
// const existingId = require('./middleware/existingId');
const validateTeamId = require('./middlewares/validateTeamId');
const validateTeamData = require('./middlewares/validateTeamData');

app.get('/teams', (req, res) => res.json(teams));

// -------- validação das propriedades (nome e sigla) de team necessárias para a aplicação --------
// const validateTeamData = (req, res, next) => {
//   const requiredProperties = ['nome', 'sigla'];
//   if (requiredProperties.every((property) => property in req.body)) { // 1️⃣ 
//     next(); // Chama o próximo middleware 2️⃣
//   } else {
//     res.status(400).send({message: 'O team precisa receber os atributos: nome e sigla'}); // Ou já responde avisando que deu errado 3️⃣
//   }
// };
// 1️⃣ Faz uma validação básica que apenas confere se todas as propriedades esperadas estão presentes no req.body.
// 2️⃣ Se a validação aprovar, esse middleware endereça a requisição para o próximo middleware, que efetivamente cria o time.
// 3️⃣ Se a validação falhar, esse middleware retorna uma resposta com status 400 e nunca chama o próximo middleware. 400 é o código HTTP para Bad Request, indicando que existe algo errado na requisição. Para mais informações sobre códigos HTTP, confira a documentação no site da MDN (Mozilla Developer Network).

//Outro exemplo de validação
// -------- validação do ID, se realmente é um número --------
// const validateTeamId = (req, res, next) => {
//   const { id } = req.params;

//   const idAsNumber = Number(id);
//   if (Number.isNaN(idAsNumber)) {
//     res.status(400).send({message: 'ID inválido! Precisa ser um número'});
//   } else {
//     next();
//   }
// };

// ------------------ PARA FIXAR ---------------------
// 🚀 Crie um middleware existingId para garantir que o id passado como parâmetro na rota GET /teams/:id existe no objeto teams. Refatore essa rota para usar o middleware.
// 🚀 Reaproveite esse middleware e refatore as rotas PUT /teams/:id e DELETE /teams/:id para usarem ele também.
// 🚀 Mova o middleware validateTeam para o arquivo src/middlewares/validateTeam.js, mas continue usando o middleware nas rotas POST /teams e PUT /teams/:id.
// 🚀 Mova o middleware existingId para o arquivo src/middlewares/existingId.js, mas continue usando o middleware nas rotas PUT /teams/:id e DELETE /teams/:id.


app.get('/teams/:id', validateTeamId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

app.post('/teams', validateTeamData, (req, res) => { // Arranja os middlewares para chamar validateTeamData primeiro 2️⃣
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

app.put('/teams/:id', validateTeamId, validateTeamData, (req, res) => { // Arranja os middlewares para chamar validateTeamData primeiro 2️⃣
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
