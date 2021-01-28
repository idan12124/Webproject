
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let user = new Schema(
  {
    username: {
      type: String
    },
    password: {
        type: String
    },
    company: {
      type: String
    },
    email: {
      type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    city: {
      type: String
    },
    country: {
        type: String
    },
    postalcode: {
        type: Number
    },
    about: {
        type: String
    }
  }
);  

module.exports = mongoose.model('User', user)