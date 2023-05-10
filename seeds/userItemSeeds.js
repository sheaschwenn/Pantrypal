const {UserItem} =require('../models');

const userItemData = [
    {
      item_id: 1,
      user_id: 1,
      date_bought: "2022-03-05",
      bought: true,
    },
    {
      item_id: 2,
      user_id: 1,
      date_bought: "2022-05-01",
      bought: true,
    },
    {
      item_id: 3,
      user_id: 2,
      date_bought: "2022-04-15",
      bought: true,
    },
    {
      item_id: 4,
      user_id: 2,
      date_bought: "2022-05-01",
      bought: true,
    },
    {
      item_id: 5,
      user_id: 3,
      date_bought: "2022-05-05",
      bought: false,
    },
    {
      item_id: 6,
      user_id: 3,
      date_bought: "2022-05-07",
      bought: false,
    },
    {
      item_id: 7,
      user_id: 4,
      date_bought: "2022-04-30",
      bought: true,
    },
    {
      item_id: 8,
      user_id: 4,
      date_bought: "2022-05-02",
      bought: true,
    },
    {
      item_id: 9,
      user_id: 5,
      date_bought: "2022-05-04",
      bought: true,
    },
    {
      item_id: 10,
      user_id: 5,
      date_bought: "2022-05-08",
      bought: true,
    },
    {
      item_id: 11,
      user_id: 1,
      date_bought: "2022-04-30",
      bought: true,
    },
    {
      item_id: 12,
      user_id: 1,
      date_bought: "2022-05-08",
      bought: true,
    },
    {
      item_id: 13,
      user_id: 2,
      date_bought: "2022-04-30",
      bought: true,
    },
    {
      item_id: 14,
      user_id: 2,
      date_bought: "2022-05-08",
      bought: true,
    },
    {
      item_id: 15,
      user_id: 3,
      date_bought: "2022-04-30",
      bought: true,
    },
    {
      item_id: 16,
      user_id: 3,
      date_bought: "2022-05-08",
      bought: true,
    },
    {
      item_id: 17,
      user_id: 4,
      date_bought: "2022-04-30",
      bought: true,
    },
    {
      item_id: 18,
      user_id: 4,
      date_bought: "2022-05-08",
      bought: true,
    },
    {
      item_id: 19,
      user_id: 5,
      date_bought: "2022-04-30",
      bought: true,
    },
    {
      item_id: 20,
      user_id: 5,
      date_bought: "2022-05-08",
      bought: true,
    }
  ]

  const seedUserItems = () => UserItem.bulkCreate(userItemData, {
    individualHooks: true,
    returning:true
  });

  module.exports = seedUserItems