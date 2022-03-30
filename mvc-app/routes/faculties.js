var express = require('express');
var router = express.Router();
const controller = require('../controllers/faculties');

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getEdit)
      .post('/', controller.create)
      .post('/:id', controller.update)

module.exports = router;