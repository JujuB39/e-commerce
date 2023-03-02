const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
  try{
    // find all categories
    // be sure to include its associated Products
    const categories = await Category.findAll({
      include: [Product]
    })
    res.json(categories)
  } catch(error) {
    res.status(500).json(error)
  }
  
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try{
    const oneCategory = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
  res.json(oneCategory)
  } catch(error) {
  res.status(500).json(error)
  }
});

//New category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    res.json(newCategory)
  } catch(error) {
    res.status(500).json(error)
  }
});

//update category by id 
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(updateCategory)
  } catch(error) {
    res.status(500).json(error)
  }
  
});

 // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(deleteCategory)
  } catch(error) {
    res.status(500).json(error)
  }
 
});

module.exports = router;
