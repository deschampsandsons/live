const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  offer: {
    type: String,
    required: true
  },
  skills: {
    type: String
  },
  hours: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
