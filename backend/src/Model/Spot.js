const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  path: String,
  company: String,
  techs: [String],
  price: Number,
},
  {
    toJSON: { virtuals: true }
  }
);

SpotSchema.virtual('path_url').get(function() {
  return `${process.env.APP_URL}/files/${this.path}`
});

module.exports = mongoose.model('Spot', SpotSchema);