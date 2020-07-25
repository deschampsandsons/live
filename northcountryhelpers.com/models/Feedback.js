const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Feedback = mongoose.model('feedback', FeedbackSchema);
