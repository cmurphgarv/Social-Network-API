const router = require('express').Router({mergeParams: true});
const reactionRoutes = require('./reactionRoutes');

const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought);
router.route('/:thoughtId').put(updateThought);
router.route('/:thoughtId').delete(deleteThought);
router.use('/:thoughtId/reactions', reactionRoutes)

module.exports = router;