const {User} = require('../models')

const userData = [
    {
        name: "John Smith",
        email: "john@example.com",
        password: "password123",
      },
      {
        name: "Jane Doe",
        email: "jane@example.com",
        password: "password456",
      },
      {
        name: "Bob Johnson",
        email: "bob@example.com",
        password: "password789",
      },
      {
        name: "Alice Williams",
        email: "alice@example.com",
        password: "passwordabc",
      },
      {
        name: "Mike Brown",
        email: "mike@example.com",
        password: "passworddef",
      },
]

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning:true
  });

  module.exports = seedUsers