const connection = require('../config/connection');
const { Thought } = require('../models');
const thoughtSeed = require('./thought-data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

   // Add thoughts to the collection and await the results
   await Thought.collection.insertMany(thoughtSeed);

 

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughtSeed);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
