'use strict';

const mongoose = require('mongoose');

const allUsersSchema = mongoose.Schema({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  username: { type: String, default: '' },
  age: { type: String, default: '' },
  instrument: { type: String, default: '' },
  location: { type: String, default: '' },
  picture: { type: String, default: '' },
  hero: { type: String, default: '' },
  //json string object representing array of friends
  friends: {
    type: String,
    default: `
    []
    `},
  aboutMe: { type: String, default: '' },
  playlist: { type: String, default: '' },
  posts: {
    type: String,
    default: `
    [
      {
        "id": "1",
        "title": "Title of Post 1",
        "content": "Some Content"
      },
      {
        "id": "2",
        "title": "Title of Post 2",
        "content": "Some Content"
      }
    ]
    `},
  interests: {
    type: String,
    default: `
    [
      {
        "id": "1",
        "name": "General",
        "info": "---"
      },
      {
        "id": "2",
        "name": "Music Genre",
        "info": "---"
      },
      {
        "id": "3",
        "name": "Instrument",
        "info": "---"
      },
      {
        "id": "4",
        "name": "Books",
        "info": "---"
      }
    ]
    `},
  //json string object representing array of user"s details?
  details: {
    type: String,
    default: `
  [
    {
      "id": "1",
      "name": "Gender",
      "info": "---"
    },
    {
      "id": "2",
      "name": "Hometown",
      "info": "---"
    },
    {
      "id": "3",
      "name": "Food",
      "info": "---"
    },
    {
      "id": "4",
      "name": "Bands",
      "info": "---"
    },
    {
      "id": "5",
      "name": "Hobbies",
      "info": "---"
    }
  ]
  `}
})

const allUsersModel = mongoose.model('allUsers', allUsersSchema);

module.exports = allUsersModel;
