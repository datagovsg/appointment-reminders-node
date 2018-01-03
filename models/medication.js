'use strict';

const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  quantity: Number,
  units: String,
  remarks: String,
  frequency: Number, // per day
});

const Medication = mongoose.model('Medication', medicationSchema);
module.exports = Medication;
