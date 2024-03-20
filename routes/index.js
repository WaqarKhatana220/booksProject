var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main')

/* GET home page. */
router.get('/', mainController.getAll);
router.get('/:author', mainController.getOne);

router.post('/', mainController.add);

router.put('/:author', mainController.update);

router.delete('/:author', mainController.deleteOne);
router.delete('/', mainController.deleteAll);

module.exports = router;
