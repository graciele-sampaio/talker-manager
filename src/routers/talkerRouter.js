const express = require('express');

const fs = require('fs').promises;

const router = express.Router();

router.get('/talker', async (req, res) => {
  const data = await fs.readFile('./src/talker.json', 'utf-8');
  const talkersJson = JSON.parse(data);
  res.status(200).json(talkersJson);
  console.log('primeiro endpoint ok');
});

module.exports = router;