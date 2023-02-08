const fs = require('fs').promises;

module.exports = async function apiCredentials(req, res, next) {
  const token = req.header('X-API-TOKEN');
  const authdata = await fs.readFile('./authdata.json', { encoding: 'utf-8' });
  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    req.teams = authorized[token]; // modifica o req para guardar a informação importante
    next();
  } else {
    res.status(401).send({ message: 'Token inválido ou expirado.' }); // AGORA tem uma mensagem de erro personalizada
  }
};

// Repare que estamos usando req.teams para guardar essa informação. Poderíamos criar qualquer propriedade, mas devemos ter cuidado para não sobrescrever as propriedades que req já tem. Na dúvida, você pode conferir os campos do req usando o debugger. Aqui vamos usar teams mesmo, que não tem conflito nenhum.