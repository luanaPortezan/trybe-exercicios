const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (teams.some((t) => t.id === id)) {
    next();
  } else {
    res.status(404).send({ message: 'Time não encontrado' }); // AGORA tem uma mensagem de erro personalizada
  }
};

module.exports = existingId;