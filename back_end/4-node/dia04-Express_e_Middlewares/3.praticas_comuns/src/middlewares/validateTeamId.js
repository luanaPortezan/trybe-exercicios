const validateTeamId = (req, res, next) => {
  const { id } = req.params;

  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) {
    res.status(400).send({message: 'ID inválido! Precisa ser um número'}); // AGORA tem uma mensagem de erro personalizada
  } else {
    next();
  }
};

module.exports = validateTeamId;