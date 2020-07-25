const mongoose = require('mongoose');

const NRWSSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = NRWS = mongoose.model('nrws', NRWSSchema);
