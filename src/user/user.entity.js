const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  encryptedPassword: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { userSchema, User };
