const router = require('express').Router();
const userRoutes = require('../api/userRoutes');
const thoughtRoutes = require('../api/thoughtRoutes');
//add friend and reaction routes

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
//add friend and reaction routes

module.exports = router;
