var express = require('express');
var router = express.Router();
const controller = require('../controllers/universities');

router.get('/', controller.getAll)
      // .get('/create', controller.getCreate)
      // .get('/:id', controller.getEdit)
      // .post('/', controller.create)
      // .post('/:id', controller.update)
      // .delete('/:id', controller.delete)

module.exports = router;