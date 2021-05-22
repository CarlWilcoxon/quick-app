const express = require('express');
const { resetWarningCache } = require('prop-types');
const pool = require('../modules/pool');
const router = express.Router();

let history = [];
/**
 * GET route template
 */
router.get('/load-history', (req, res) => {
  // GET route code here
  res.send(history);
});

/**
 * POST route template
 */
 router.post('/add-history', (req, res) => {
  console.log('input is',req.body);

  history.push(req.body.newEntry);

  res.sendStatus(200);
});

router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
