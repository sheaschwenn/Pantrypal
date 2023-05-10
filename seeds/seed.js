const seedUsers = require('./userSeeds');
const seedUserItems = require('./userItemSeeds');
const seedItems = require('./itemSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

    await sequelize.sync({force: true});
    console.log('Database synced');
    await seedUsers();
    console.log('Users seeded');

    await seedItems();
    console.log('Items seeded');

    await seedUserItems();
    console.log('UserItems seeded')

    process.exit(0);
};

seedAll();