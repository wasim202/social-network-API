const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addUserFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users/:userId
router.route('/:userId').put(updateUser);

// /api/users/:userId
router.route('/:userId').delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friend').post(addUserFriend);

module.exports = router;
