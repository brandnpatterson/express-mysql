const path = require('path');
const express = require('express');
const { createUser } = require('../controllers/usersController');

const router = express.Router();

router.post('/user', createUser);

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = router;
