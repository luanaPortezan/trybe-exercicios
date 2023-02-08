const validateTeamData = (req, res, next) => {
  const { nome, sigla } = req.body;
  if (!nome) {
    return res.status(400).json({ message: 'O campo "nome" é obrigatório'}) // AGORA tem uma mensagem de erro personalizada
  };
  if (!sigla) {
    return res.status(400).json({ message: 'O campo "sigla" é obrigatório'}) // AGORA tem uma mensagem de erro personalizada
  };
  next();
  // const requiredProperties = ['nome', 'sigla'];
  // if (requiredProperties.every((property) => property in req.body)) {
  //   next();
  // } else {
  //   res.status(400).send({message: 'O team precisa receber os atributos: nome e sigla'});
  //   }
  // Agora que invertemos a lógica da validação. Anteriormente se as informações da requisição estivessem corretas, era chamado o próximo middleware. Agora, primeiramente verificamos todas as informações, e depois, caso estejam corretas, é chamado o próximo middleware. Esta forma permite encadear cada uma das validações, e criar respostas específicas para cada uma.
};

module.exports = validateTeamData;