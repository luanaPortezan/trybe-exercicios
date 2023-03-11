const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    // phoneNum: DataTypes.STRING,  // ------- PODERIA ADICIONAR A NOVA COLUNA ASSIM TAMBÉM -----
  });
  (async () => {
    await sequelize.sync({ force: true});
    // as funções vão aqui
  })();
  return User;
};

module.exports = UserModel;