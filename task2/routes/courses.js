var express = require('express');
var router = express.Router();
const controller = require('../controllers/courses');
const jwt = require ('express-jwt');
const response = require('../lib/response_handler');

require('dotenv').config();

router.use(jwt({ 
      secret: process.env.JWT_SECRET_KEY,
      algorithms: ['HS256'] 
}).unless({
      path: [
            {
                  url: '/courses', methods: ['GET']
            },
            {
                  url: /^\/courses\/.*/, methods: ['GET']
            }
      ]
}));

router.use((err, req, res, next) => {
      console.log(err.name);
      if (err.name === 'UnauthorizedError') {
            response(res, 401, 'Unauthorized access');
      }
})

router.get('/', controller.getAll)
      .get('/:id', controller.getById)
      .post('/', controller.create)
      .patch('/:id', controller.patch)
      .delete('/:id', controller.delete)
module.exports = router;