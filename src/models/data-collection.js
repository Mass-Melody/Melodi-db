'use strict';

// THIS IS THE STRETCH GOAL ...
// It takes in a schema in the constructor and uses that instead of every collection
// being the same and requiring their own schema. That's not very DRY!

class DataCollection {

  constructor(model) {
    this.model = model;
  }

  get(_username) {
    if (_username) {
      return this.model.findOne({ 'username': _username });
    }
    else {
      return this.model.find({});
    }
  }

  create(record) {
    let newRecord = new this.model(record);
    return newRecord.save();
  }

  update(_username, record) {
    return this.model.findByUsernameAndUpdate(_username, record, { new: true });
  }

  delete(_username) {
    return this.model.findByUsernameAndDelete(_username);
  }

}

module.exports = DataCollection;
