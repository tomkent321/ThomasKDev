const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  message: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },

  response: {
    type: Date
  }
});

module.exports = mongoose.model('Contact', ContactSchema);
