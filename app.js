/* eslint-disable import/no-unresolved */
const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: '62e57a20b4ebd5896ce2f447',
  };

  next();
});

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.all('*', (req, res) => {
  res.status(404).send({ message: 'Страница с таким url не найдена' });
});

app.listen(PORT, () => {
  console.log(`Запуск сервера ${PORT}`);
});
