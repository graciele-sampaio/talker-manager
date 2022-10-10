const express = require('express');

const dataTalkers = require('../utils/dataTalkers');

const router = express.Router();

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

module.exports = router;