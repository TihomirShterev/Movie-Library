const express = require('express');
const { add, list, remove } = require('../controllers/favorite');
const router = express.Router();

router.route('/:userId').get(list);
router.route('/add/:favoriteId').put(add);
router.route('/remove/:favoriteId').put(remove);

module.exports = router;
