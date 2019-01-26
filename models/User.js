const Sequelize = require('sequelize');

const User = sequelize => {
  return sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  });
};

module.exports = User;
