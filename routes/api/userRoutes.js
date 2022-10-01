const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addUserFriend,
  removeUserFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users/:userId
router.route('/:userId').put(updateUser);

// /api/users/:userId
router.route('/:userId').delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friend/:friendId').post(addUserFriend);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friend/:friendId').delete(removeUserFriend);

module.exports = router;
