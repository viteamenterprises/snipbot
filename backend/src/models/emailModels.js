const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Email', emailSchema);
