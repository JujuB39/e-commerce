const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


 // find all tags
  // be sure to include its associated Product data
router.get('/', async (req, res) => {
  try{
    const tags = await Tag.findAll({
      include: [Product]
    })
    res.json(tags)
  } catch(error) {
    res.status(500).json(error)
  }
 
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try{
    const oneTag = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
  res.json(oneTag)
  } catch(error) {
  res.status(500).json(error)
  }

});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body)
    res.json(newTag)
  } catch(error) {
    res.status(500).json(error)
  }

});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(updateCategory)
  } catch(error) {
    res.status(500).json(error)
  }

});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(deleteTag)
  } catch(error) {
    res.status(500).json(error)
  }

});

module.exports = router;
