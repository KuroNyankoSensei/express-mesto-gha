const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { createUser, login } = require('./controllers/users');
const {
  validateLogin,
  validateUser,
} = require('./middlewares/validation');
const auth = require('./middlewares/auth');
const handelError = require('./middlewares/handelError');
const NotFoundError = require('./errors/NotFoundError');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

const app = express();
app.use(express.json());

app.post('/signin', validateLogin, login);
app.post('/signup', validateUser, createUser);

app.use(auth);
app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.all('*', (req, res, next) => {
  next(new NotFoundError('Страница с таким url не найдена'));
});

app.use(errors());
app.use(handelError);

app.listen(PORT, () => {
  console.log(`Запуск сервера ${PORT}`);
});
