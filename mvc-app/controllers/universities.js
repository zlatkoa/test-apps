const University = require('../models/university');
const Faculty = require ('../models/faculty');

module.exports = {

  getAll: 
    async (req, res) => {
    const university = await University.find();
    res.render('universities/index', { university });
  }
}