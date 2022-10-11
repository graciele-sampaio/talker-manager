const fs = require('fs').promises;

const dataTalkers = async () => {
  try {
    const data = await fs.readFile('./src/talker.json', 'utf-8');
    const response = JSON.parse(data);
    return response;
  } catch (err) {
    console.log('Erro ao ler o arquivo');
  }
};

module.exports = dataTalkers;
