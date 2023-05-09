const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserItem extends Model { }

UserItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'item',
                key: 'id'
            }
        },
        user_id : {
            type: DataTypes.INTEGER,
      references:{
        model:'user',
        key:'id'
      }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_item',
      }
);

module.exports = UserItem