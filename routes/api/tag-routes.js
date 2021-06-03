const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tag = await Tag.findAll({
      include: [
        //refers to relationship formed in models/index.js
        {
          model: Product,
          through: ProductTag,
        },
      ],
    })
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    //changed findbyPk to findOne- does either work?
    const tag = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [
         //refers to relationship formed in models/index.js
        {
          model: Product,
          through: ProductTag,
        },
      ],
    })
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }

});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});


// updates tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// deletes tag by its `id` value (using destroy)
router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: { 
        id: req.params.id
      },
    });
    // if searched id does not exist, return error
    if (!tag) {
      res.status(404).json({ message: "No tag matching this id." });
      return;
    }
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
