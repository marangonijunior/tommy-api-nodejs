import mongoose, { Schema } from 'mongoose';

var usersSchema = new Schema({
  name: String,
  gender: String,
  email: String,
  phone: String,
  address: [
    {
      number: Number,
      street: String,
      city: String,
      zipcode: String
    }
  ]
});

mongoose.model('users', usersSchema);
module.exports = mongoose.model('users');

