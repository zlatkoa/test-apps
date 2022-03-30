const mongoose = require('mongoose');
const Academy = require('../models/academy');
const axios = require('axios');
const response=require('../lib/response_handler');
const jwt = require ('jsonwebtoken');



module.exports ={
  getAll:
  async (req, res) => {
    const academies = await Academy.find().populate('courses');
    res.send({
      error: false,
      message: 'All academies from the database',
      academies: academies
    });
  },

  getById:
  async (req, res) =>{
    const academy = await Academy.findById(req.params.id);
    res.send({
      error:false,
      message: `Academy with id #${course._id}`,
      academy : academy
    });
  },

  create:
  async (req, res) => {     
    const academy = await Academy.create(req.body);
    res.send({
      error: false,
      message: 'New academy has been created',
      academy: academy
    });
  },

  patch:
  async (req, res) => {
    await Academy.findByIdAndUpdate(req.params.id, req.body);
    const academy = await Academy.findById(req.params.id);
    res.send({
      error: false,
      message: `Academy with id #${course._id} has been updated`,
      academy: academy
    });
  },

  delete:
  async (req, res) => {
    await Academy.findByIdAndDelete(req.params.id);
    res.send({
      error: false,
      message: `Academy with id #${req.params.id} has been deleted`
    });
  }
}