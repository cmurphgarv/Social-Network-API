const mongoose = require('mongoose');
const User = require('../models/User');

const seedUsers = [
    {
        email: 'bob@gmail.com',
        username: 'bob324'
    },
    {
        email: 'louise@gmail.com',
        username: 'bunnyLouise'
    },
    {
        email: 'tina@gmail.com',
        username: 'teeeena'
    },
    {
        email: 'linda@gmail.com',
        username: 'LinLin'
    },
];

module.exports = seedUsers;