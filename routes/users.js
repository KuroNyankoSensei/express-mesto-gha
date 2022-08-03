const routerUser = require('express').Router();

const {
  getUsers,
  getCurrentUser,
  getUser,
  updateAvatar,
  updateProfile,
} = require('../controllers/users');

const {
  validateUserId,
  validateUpdateUser,
  validateAvatar,
} = require('../middlewares/validation');

routerUser.get('/', getUsers);
routerUser.get('/me', getCurrentUser);
routerUser.get('/:userId', validateUserId, getUser);
routerUser.patch('/me', validateUpdateUser, updateProfile);
routerUser.patch('/me/avatar', validateAvatar, updateAvatar);

module.exports = routerUser;
