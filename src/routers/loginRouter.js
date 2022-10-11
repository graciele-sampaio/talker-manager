const express = require('express');

const router = express.Router();

const generateToken = require('../utils/generateToken');

const validateLogin = require('../middlewares/validateLogin');

// requisitos 3 e 4
router.post('/login', validateLogin, async (req, res) => {
  console.log('post');
 
  return res.status(200).json({ token: generateToken() });
});

module.exports = router;