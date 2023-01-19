// import dependencies
const router = require('express').Router();
const userRoutes = require('../api/userRoutes');
const thoughtRoutes = require('../api/thoughtRoutes');
const reactionRoutes = require('../api/reactionRoutes');
const friendRoutes = require('../api/friendRoutes');

// implement routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/thoughts/:thoughtId/reactions', reactionRoutes);
router.use('users/:userId/friends/:friendId', friendRoutes);


module.exports = router;
