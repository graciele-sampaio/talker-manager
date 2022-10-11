const validateTalk = async (req, res, next) => {
  const { talk } = req.body;
  
  if (!talk || talk === undefined) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }

  const { watchedAt } = req.body.talk;
  const watchedValid = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório',
   });
  }

  if (!watchedValid.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
   });
  }
  next();
};

module.exports = validateTalk;
