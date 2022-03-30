const mongoose = require('mongoose');
const Course = require('../models/course');
const Academy = require('../models/academy');
const axios = require('axios');
const response=require('../lib/response_handler');
const jwt = require ('jsonwebtoken');



module.exports ={
  getAll:
  async (req, res) => {
    const courses = await Course.find().populate('academy' , '-courses' );
    res.send({
      error: false,
      message: 'All courses from the database',
      courses: courses
    });
  },

  getById:
  async (req, res) =>{
    const course = await Course.findById(req.params.id);
    res.send({
      error:false,
      message: `Course with id #${course._id}`,
      post : post
    });
  },

  create:
  async (req, res) => {     
    const course = await Course.create(req.body);
    await Academy.findByIdAndUpdate(req.body.academy, {
        $push: { courses: course }
    })
    res.send({
      error: false,
      message: 'New course has been created',
      course: course
    });
  },

  patch:
  async (req, res) => {
    await Course.findByIdAndUpdate(req.params.id, req.body);
    const course = await Course.findById(req.params.id);
    res.send({
      error: false,
      message: `Course with id #${course._id} has been updated`,
      course: course
    });
  },

  delete:
  async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.send({
      error: false,
      message: `Course with id #${req.params.id} has been deleted`
    });
  }
}