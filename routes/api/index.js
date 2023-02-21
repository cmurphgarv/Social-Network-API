// import dependencies
const router = require('express').Router();
const userRoutes = require('../api/userRoutes');
const thoughtRoutes = require('../api/thoughtRoutes');

// implement routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);



module.exports = router;
