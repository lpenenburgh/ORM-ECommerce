const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

 // find all categories
  // includes its associated Products(model)
router.get('/', async (req, res) => {
  try {
    const category = await Category.findAll({
      include: [ 
        {
          model: Product 
        }
      ],
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // find one category by its `id` value
  // includes its associated Products(model) to match the id
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
           model: Product
        }
      ],
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// creates a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// updates a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// deletes a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    // if searched category id does not exist, return error
    if (!category) {
      res.status(404).json({ message: 'no category matches this id' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
