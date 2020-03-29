const Spot = require('../Model/Spot');

module.exports = {

  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    
    const spot = await Spot.create({
      path: filename,
      company, 
      techs: techs.split(',').map(tech => tech.trim()),
      price 
    });

    return res.json(spot);

  },

  async index(req, res) {

    const spots = await Spot.find();

    return res.json(spots);

  },

  async delete(req, res) {
    const { _id } = req.body;

    const spot = await Spot.deleteOne({ _id });

    return res.json({ spot });
  }

};