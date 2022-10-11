const fs = require('fs').promises;

const dataTalkers = require('./dataTalkers');

async function insertTalkers(newTalker) {
  try {
    const oldTalkers = await dataTalkers();
    const newData = JSON.stringify([...oldTalkers, newTalker]);
    await fs.writeFile('./src/talker.json', newData);
  } catch (err) {
    console.log('Erro ao escrever no arquivo');
  }
}

module.exports = insertTalkers;
