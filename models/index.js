const User = require("./User");
const Item = require("./Item");
const UserItem = require("./UserItem");

// items belong to many users through useritem
Item.belongsToMany(User, {
  through: UserItem,
  foreignKey: "item_id",
  // onDelete: "CASCADE"
  uniqueKey: false
});

// users belong to many items through useritems

User.belongsToMany(Item, {
  through: UserItem,
  foreignKey: "user_id",
  onDelete: "CASCADE",
  uniqueKey: false
});



module.exports = {
  User,
  Item,
  UserItem,
};
