const connection = require('../config/connection');
const User = require('../models/User');
const seedUsers = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  //await Thought.deleteMany({});
  await User.deleteMany({});

  await User.collection.insertMany(seedUsers);

  process.exit(0);
});
