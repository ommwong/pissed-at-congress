module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return User;
};