'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Property Schema
 */
var PropertySchema = new Schema({
  address: {
    type: String,
    default: ''
  },
  image1: {
    type: String,
    default: ""
  },
  pricePerMeter: {
    type: String,
    default: ''
  },
  totalMeters: {
    type: String,
    default: ''
  },
  availableMeters: {
    type: String,
    default: ''
  },
  folio: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Property', PropertySchema);
