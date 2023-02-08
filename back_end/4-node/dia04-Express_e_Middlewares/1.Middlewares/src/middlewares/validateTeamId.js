// ver explicação em app.js

const validateTeamId = (req, res, next) => {
  const { id } = req.params;

  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) {
    res.status(400).send({message: 'ID inválido! Precisa ser um número'});
  } else {
    next();
  }
};

module.exports = validateTeamId;
// valida se o id passado na requisição é um número. Se for, a requisição é encaminhada para o próximo middleware. Se não for, é retornado um erro com status HTTP 400 e a mensagem "ID inválido! Precisa ser um número".


// const existingId = (req, res, next) => {
//   const id = Number(req.params.id);
//   if (teams.some((t) => t.id === id)) { // se existe, a requisição segue para o próximo middleware
//     next();
//   } else {   // se não existe, então vamos retornar o status HTTP 404
//     res.sendStatus(404);
//   }
// };
// module.exports = existingId;

//a função existingId verifica se o id passado na requisição já existe na lista de times. Se existir, a requisição é encaminhada para o próximo middleware. Se não existir, é retornado o status HTTP 404.