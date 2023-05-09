const User = require("./User");
const List = require("./Item");

List.belongsTo(User, {
    foreignKey: "user_id",
});
