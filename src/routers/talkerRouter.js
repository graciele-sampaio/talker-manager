const express = require('express');

const fs = require('fs').promises;

const path = require('path');

const router = express.Router();

const dataTalkers = require('../utils/dataTalkers');
const insertTalkers = require('../utils/insertTalkers');

const pathTalkers = path.resolve(__dirname, '..', 'talker.json');

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

// requisito 6
router.put('/talker/:id', 
validateAuth,
validateName,
validateAge,
validateTalk,
validateRate,
async (req, res) => {
  const { id } = req.params;
  const talkers = req.body;
  const allTalkers = await dataTalkers();
  const filteredId = allTalkers.findIndex((oneTalker) => oneTalker.id === Number(id));
  const editedTalkers = { ...talkers, id: Number(id) };
  allTalkers[filteredId] = editedTalkers;
  const newData = JSON.stringify(allTalkers);
  await fs.writeFile('./src/talker.json', newData);
    return res.status(200).json({ ...editedTalkers });
});

// requisito 7
router.delete('/talker/:id', validateAuth, async (req, res) => {
  const { id } = req.params;
  const allTalkers = JSON.parse(await fs.readFile(pathTalkers, 'utf8'));
  const findIndex = allTalkers.findIndex((talker) => talker.id === Number(id));
  allTalkers.splice(findIndex, 1);
  fs.writeFile('./src/talker.json', JSON.stringify(allTalkers));
  res.status(204).end();
});
module.exports = router;

// Agradecimentos a João GUstavo, Rogério Lins e Carla Uyemura e Lalá.