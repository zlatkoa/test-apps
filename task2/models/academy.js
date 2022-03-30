const mongoose = require('mongoose');

const academySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: { 
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  courses: [{
    type: mongoose.Types.ObjectId,
    ref:'course'    
  }]

}, { timestamps: true });

module.exports = mongoose.model('academy', academySchema);