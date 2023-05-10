const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserItem extends Model {}

UserItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date_bought: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      onUpdate: sequelize.literal('CURRENT_TIMESTAMP'),
    },

    bought: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "item",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },

  },
  {
    hooks: {
      beforeUpdate: async (userItem, options) => {
        if (userItem.changed("bought") && userItem.bought === true) {
          userItem.bought_date = new Date();
        }
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "user_item",
  }
);

module.exports = UserItem;
