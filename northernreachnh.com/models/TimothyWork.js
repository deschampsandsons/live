const mongoose = require('mongoose');

const TimothyWorkSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  msg: {
    type: String,
  },
});

module.exports = TimothyWork = mongoose.model('timothywork', TimothyWorkSchema);
