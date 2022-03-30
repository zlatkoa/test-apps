var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');
const jwt = require ('express-jwt');

require('dotenv').config();

// router.use(
//   jwt({
//     secret: process.env.JWT_SECRET_KEY,
//     algorithms: ['HS256'],
//   }).unless({
//     path: [
//       {
//         url: '/users/login',
//         methods: ['POST'],
//       },
//       {
//         url: '/users',
//         methods: ['POST'],
//       },
//     ],
//   })
// );

// router.use((err, req, res, next) => {
//   console.log(err.name);
//   if (err.name === 'UnauthorizedError') {
//     response(res, 401, 'Unauthorized access');
//   }
// });

router.get('/', controller.getAll)
      .get('/:id', controller.getById)
      .post('/', controller.register)
      .post ('/login', controller.login)
      .patch('/:id', controller.patch)
      .delete('/:id', controller.delete)

module.exports = router;
