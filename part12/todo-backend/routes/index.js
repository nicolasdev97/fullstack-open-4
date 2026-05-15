const express = require('express');
const router = express.Router();

const configs = require('../util/config')

const redis = require('../redis')

const { get } = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (_, res) => {
  const addedTodos = await get('added_todos')

  res.json({
    added_todos: Number(addedTodos) || 0
  })
})

module.exports = router;
