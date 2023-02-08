const fs = require('fs').promises;

module.exports = async function apiCredentials(req, res, next) { // async
  const token = req.header('X-API-TOKEN'); // pega o token do cabeçalho, se houver
  const authdata = await fs.readFile('./authdata.json', { encoding: 'utf-8' }); // lê o conteúdo do `./authdata.json` (relativo à raiz do projeto)
  const authorized = JSON.parse(authdata); // readFile nos deu uma string, agora vamos carregar um objeto a partir dela (função JSON.parse faz isso, transforma string em objeto)

  if (token in authorized) {
    next(); // pode continuar
  } else {
    res.sendStatus(401); // não autorizado
  }
};

// o uso do método req.header() para acessar um cabeçalho, estamos usando req.header('X-API-TOKEN') porque o cabeçalho (header) usado é o X-API-TOKEN. O protocolo HTTP tem cabeçalhos já estabelecidos, mas é costume prefixar cabeçalhos customizados com X-, como fizemos com X-API-TOKEN