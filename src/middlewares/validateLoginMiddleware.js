const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const emailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  
  if (!email) {
    return res.status(400).json({ message: 'O email deve ser preenchido' });
  }

  if (!emailValid.test(email)) {
    return res.status(400).json({ message: 'O email deve ter o formato "email@email.com"' });
  }
  if (!password) {
    return res.status(400).json({ message: 'A senha deve ser preenchida' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'A senha deve ter no mínimo 6 caracteres' });
  }
  next();
};

module.exports = validateLogin;
