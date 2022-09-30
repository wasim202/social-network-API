const connection = require('../config/connection');
const { User } = require('../models');
const userSeed = require('./user-data')


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

   // Add users to the collection and await the results
   await User.collection.insertMany(userSeed);

  // Create empty array to hold the users
  //const users = [];

  // Loop 20 times -- add users to the users array
  // for (let i = 0; i < 20; i++) {
  //   // Get some random reaction objects using a helper function that we imported from ./data
  //   const reactions = getRandomReactions(20);

  //   const fullName = getRandomName();
  //   const first = fullName.split(' ')[0];
  //   const last = fullName.split(' ')[1];
  //   const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

  //   users.push({
      
  //   });
  // }

 

  // // Add courses to the collection and await the results
  // await Thought.collection.insertOne({
  //   thoughtName: 'UCLA',
  //   inPerson: false,
  //   users: [...users],
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(userSeed);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
