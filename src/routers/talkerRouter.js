const express = require('express');

const router = express.Router();

const dataTalkers = require('../utils/dataTalkers');
const insertTalkers = require('../utils/insertTalkers');

const validateAge = require('../middlewares/validateAge');
const validateAuth = require('../middlewares/validateAuth');
const validateName = require('../middlewares/validateName');
const validateRate = require('../middlewares/validateRate');
const validateTalk = require('../middlewares/validateTalk');

// requisito 1
router.get('/talker', async (req, res) => {
  const data = await dataTalkers();
  res.status(200).json(data);
  console.log('primeiro endpoint ok');
});

// requisito 2
router.get('/talker/:id', async (req, res) => {
  const { id } = await req.params;
  const data = await dataTalkers();
  const findId = await data.find((talker) => talker.id === Number(id));

  if (findId) {
    return res.status(200).json(findId);
  } 
    res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
});

// requisito 5
router.post('/talker', 
validateAuth, 
validateName, 
validateAge, 
validateTalk, 
validateRate, 
async (req, res) => {
  const talker = req.body;
  const oldTalkers = await dataTalkers();
  talker.id = oldTalkers.length + 1;
  await insertTalkers(talker);
  res.status(201).json(talker);
});

module.exports = router;
