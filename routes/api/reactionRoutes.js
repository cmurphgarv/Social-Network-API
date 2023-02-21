const router = require('express').Router({mergeParams: true});
const {
 createReaction,
 deleteReaction
} = require('../../controllers/reactionController');

router.route('/').post(createReaction);
router.route('/:reactionId').delete(deleteReaction);

module.exports = router;