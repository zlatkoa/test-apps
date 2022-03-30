var express = require('express');
var router = express.Router();
const controller = require('../controllers/academies');
const jwt = require ('express-jwt');
const response = require('../lib/response_handler');


router.get('/', controller.getAll)
      .get('/:id', controller.getById)
      .post('/', controller.create)
      .patch('/:id', controller.patch)
      .delete('/:id', controller.delete)
module.exports = router;