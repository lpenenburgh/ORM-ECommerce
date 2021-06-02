const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns id(key), product id, tag id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      //refers to the primary key (id) in the product model
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      //refers to the primary key (id) in the tag model
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
