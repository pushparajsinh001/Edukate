const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;