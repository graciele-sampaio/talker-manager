const fs = require('fs').promises;
const dataTalkers = require('./dataTalkers');

async function editTalker(edit) {
  const allTalkers = await dataTalkers();
  console.log('allTalkers', allTalkers);
  const filteredId = allTalkers.findIndex((oneTalker) => oneTalker.id === Number(edit.id));
  console.log('console do filtro q.6', filteredId);
try {
  allTalkers[filteredId];
  const newData = JSON.stringify(filteredId);
  console.log('antes do write', newData);
  console.log('newDatadepois do push', allTalkers);
  await fs.writeFile('./src/talker.json', newData);
  console.log('depois do write', newData);
} catch (err) {
  console.error('Não foi possível editar o arquivo');
}
}

module.exports = editTalker;
