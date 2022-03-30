const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const response = require('../lib/response_handler');
const jwt = require ('jsonwebtoken');


module.exports ={
  getAll:
  async (req, res) => {
    const users = await User.find();
    res.send({
      error: false,
      message: 'All users from the database',
      users: users
    });
  },

  getById:
  async (req, res) =>{
    const user = await User.findById(req.params.id);
    res.send({
      error:false,
      message: `User with id #${user._id}`,
      user : user
    });
  },

  create:
  async (req, res) => {
    const user = await User.create(req.body);
    res.send({
      error: false,
      message: 'New user has been created',
      user: user
    });
  },

  patch:
  async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    const user = await User.findById(req.params.id);
    res.send({
      error: false,
      message: `User with id #${user._id} has been updated`,
      user: user
    });
  },

  delete:
  async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send({
      error: false,
      message: `User with id #${req.params.id} has been deleted`
    });
  },

  register:
  async (req, res) => {
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
       
      }
  
      req.body.password = bcrypt.hashSync(req.body.password);
  
      user = await User.create(req.body);
  
      response(res, 201, 'New user has been created', { user })
    } catch (error) {
      return response(res, 500, error.msg);
    }
  },

  login:
  async (req, res) => {
    try {

      const user = await User.findOne({ email: req.body.email }); 
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
        
          const payload = { 
            id: user._id,
            email: user.email,
            first_name: user.first_name,
          }
  
          const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: '50m'
          });
  
          response(res, 200, 'You have logged in successfully', { token })
        } else {
          response(res, 401, 'Invalid credentials');
        }
      } else {
        response(res, 401, 'Invalid credentials');
      }
    } catch (error) {
      response(res, 500, error.msg);
    }
  }
}