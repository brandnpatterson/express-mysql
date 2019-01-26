const Sequelize = require('sequelize');
const User = require('../models/User');

const sequelize = new Sequelize('app', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

exports.createUser = (req, res) => {
  const date = req.body.birthday.split('/');

  sequelize
    .sync()
    .then(() =>
      User(sequelize).create({
        username: req.body.name,
        birthday: new Date(date[0], date[1], date[2])
      })
    )
    .then(user => {
      res.send({ message: 'created', user });
    })
    .catch(err => res.send(err));
};
