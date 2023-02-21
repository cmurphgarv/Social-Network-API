const router = require('express').Router({mergeParams: true});
const {
 createFriend,
 deleteFriend
} = require('../../controllers/friendController');

router.route('/').post(createFriend);
router.route('/').delete(deleteFriend);

module.exports = router;