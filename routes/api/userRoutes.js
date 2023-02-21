const router = require('express').Router();
const friendRoutes = require('../api/friendRoutes');

const {
  getSingleUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);
router.route('/:userId').put(updateUser);
router.route('/:userId').delete(deleteUser);
router.use('/:userId/friends/:friendId', friendRoutes);

module.exports = router;