'use strict';

const mongoose = require('mongoose');

const allUsersSchema = mongoose.Schema({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  username: { type: String, default: '' },
  age: { type: String, default: '' },
  instrument: { type: String, default: '' },
  location: { type: String, default: '' },
  picture: { String, default: '' },
  hero: { type: String, default: '' },
  //json string object representing array of friends
  friends: [],
  aboutMe: { type: String, default: '' },
  playlist: { type: String, default: '' },
  //json string object representing array of user's posts
  posts: [],
  //json string object representing array of user's interests
  interests: {
    type: String,
    default: `
    [
      {
        id: 1,
        name: 'General',
        info: '---'
      },
      {
        id: 2,
        name: 'Music Genre',
        info: '---'
      },
      {
        id: 3,
        name: 'Instrument',
        info: '---'
      },
      {
        id: 4,
        name: 'Books',
        info: '---'
      }
    ]
    `},
  //json string object representing array of user's details?
  details: {
    type: String,
    default: `
  [
    {
      id: 1,
      name: 'Gender',
      info: '---'
    },
    {
      id: 2,
      name: 'Hometown',
      info: '---'
    },
    {
      id: 3,
      name: 'Food',
      info: '---'
    },
    {
      id: 4,
      name: 'Bands',
      info: '---'
    },
    {
      id: 5,
      name: 'Hobbies',
      info: '---'
    }
  ]
  `}
})

const allUsersModel = mongoose.model('allUsers', allUsersSchema);

module.exports = allUsersModel;
