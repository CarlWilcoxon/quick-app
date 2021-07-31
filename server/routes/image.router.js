const express = require('express');
const { resetWarningCache } = require('prop-types');
const router = express.Router();

const imageFolder = '/Users/raven/Documents/Solo/JavaScript/quick-app/public/images';

// only contains Aces and Queens currently
const cardList = [
  'AC', 'AD', 'AH', 'AS',

  'QC', 'QD', 'QH', 'QS',
];

/**
 * GET route template
 */
router.get('/images/back', (req, res) => {
  // GET route code here
  res.sendFile('/grumpy-card-back.jpeg', {root: imageFolder});
});

router.get('/images/load/:id', (req, res) => {
  // GET route code here
  const id = req.params.id;

  // make sure it is a valid card
  if (cardList.includes(id)) {
    res.sendFile(`/card-faces/${id}.svg`, {root: imageFolder})
  }
  else
  {
    // A good server always gives a response
    res.statusCode(404)
  }
})


module.exports = router;
