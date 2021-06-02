// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//create relationships between models using association methods and foreign keys

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  //referential action for a foreign key-deletes data from child tables automatically when you delete the data from the parent table. If the category is deleted, the product it belongs to will as well
  onDelete: 'CASCADE',
});

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
