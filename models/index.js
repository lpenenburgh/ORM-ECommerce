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
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// https://sequelize.org/v3/docs/associations/
// Products belongToMany Tags (through ProductTag)

//does as: 'product_tags' need to be there if through is used?
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
