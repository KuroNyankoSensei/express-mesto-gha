const routerUser = require('express').Router();

const {
  getUsers,
  createUser,
  getUser,
  updateAvatar,
  updateProfile,
} = require('../controllers/users');

routerUser.get('/', getUsers);
routerUser.get('/:userId', getUser);
routerUser.post('/', createUser);
routerUser.patch('/me', updateProfile);
routerUser.patch('/me/avatar', updateAvatar);

module.exports = routerUser;
