'use strict';

const fs = require('fs');
const express = require('express');
const Collection = require('../models/data-collection.js');
const v1 = express.Router();

const models = new Map();

v1.param('model', (req, res, next) => {
  const modelName = req.params.model;
  if (models.has(modelName)) {
    req.model = models.get(modelName);
    next();
  } else {
    const fileName = `${__dirname}/../models/${modelName}/model.js`;
    if (fs.existsSync(fileName)) {
      const model = require(fileName);
      models.set(modelName, new Collection(model));
      req.model = models.get(modelName);
      next();
    }
    else {
      next("Invalid Model");
    }
  }
});

v1.get('/api/v1/:model', handleGetAll);
v1.get('/api/v1/:model/:username', handleGetOne);
v1.post('/api/v1/:model', handleCreate);
v1.put('/api/v1/:model/:username', handleUpdate);
v1.delete('/api/v1/:model/:username', handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const username = req.params.username;
  let theRecord = await req.model.get(username)
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const username = req.params.username;
  const obj = req.body;
  let updatedRecord = await req.model.update(username, obj)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let username = req.params.username;
  let deletedRecord = await req.model.delete(username);
  res.status(200).json(deletedRecord);
}


module.exports = v1;
