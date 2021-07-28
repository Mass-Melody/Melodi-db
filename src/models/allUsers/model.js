'use strict';

const mongoose = require('mongoose');

const allUsersSchema = mongoose.Schema({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  username: { type: String, default: '' },
  age: { type: String, default: '' },
  instrument: { type: String, default: '' },
  location: { type: String, default: '' },
  picture: { type: String, default: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' },
  hero: { type: String, default: 'https://via.placeholder.com/940x500' },
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
        "title": "Welcome to Melodi!",
        "content": "Discover, Connect, Jam Out!"
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
