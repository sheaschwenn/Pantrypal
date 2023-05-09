const User = require("./User");
const Item = require("./Item");
const UserItem = require("./UserItem")

// List.belongsTo(User, {
//   foreignKey: "user_id",
// });

// items belong to many users through useritem
Item.belongsToMany(User,{
    through: UserItem,
    foreignKey: 'item_id'
})

// users belong to many items through useritems 

User.belongsToMany(Item,{
    through: UserItem,
    foreignKey: 'user_id'
})

module.exports = {
    User,
    Item,
    UserItem
}
