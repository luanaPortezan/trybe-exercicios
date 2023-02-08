//Olhe a explicação no app.js

const validateTeamData = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) { // 1️⃣ 
    next(); // Chama o próximo middleware 2️⃣
  } else {
    res.status(400).send({message: 'O team precisa receber os atributos: nome e sigla'}); // Ou já responde avisando que deu errado 3️⃣
  }
};

module.exports = validateTeamData;