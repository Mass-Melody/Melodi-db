'use strict';

const mongoose = require('mongoose');

const allUsersSchema = mongoose.Schema({
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''},
  username: {type: String, default: ''},
  age: {type: String, default: ''},
  instrument: {type: String, default: ''},
  location: {type: String, default: ''},
  picture: { String, default: ''},
  hero: {type: String, default: ''},
  //json string object representing array of friends
  friends: {type: String, default: ''},
  aboutMe: {type: String, default: ''},
  playlist: {type: String, default: ''},
  //json string object representing array of user's posts
  posts: {type: String, default: ''},
  //json string object representing array of user's interests
  interests: {type: String, default: ''},
  //json string object representing array of user's details?
  details: {type: String, default: ''}
})

const allUsersModel = mongoose.model('allUsers', allUsersSchema);

module.exports = allUsersModel;
