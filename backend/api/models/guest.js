var mongoose = require('mongoose');

var guestSchema = new mongoose.Schema({
  contact: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  fri: {
    type: Boolean,
    required: true
  },
  sat: {
    type: Boolean,
    required: true,
  },
  meal: {
    type: String,
    required: true,
  },
  other: {
    type: String,
    required: false
  }
});

mongoose.model('Guest', guestSchema);
