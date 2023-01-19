const router = require('express').Router();
const {
 createFriend,
 deleteFriend
} = require('../../controllers/friendController');

router.route('/').post(createFriend);
router.route('/:friendId').delete(deleteFriend);

module.exports = router;