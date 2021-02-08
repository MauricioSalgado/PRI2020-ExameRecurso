const mongoose = require('mongoose')

var memberSchema = new mongoose.Schema({
  id: {type: String},
  name: {type: String},
  course: {type: String},
  scores: {type: [Number]}
});

var teamSchema = new mongoose.Schema({
  guid:{type: String},
  team: {type: String},
  pitch1: {type: Boolean},
  pitch2: {type: Boolean},
  techPitch: {type: Boolean},
  businessReport: {type: Boolean},
  techReport: {type: Boolean},
  members: {type: [memberSchema]}
});


module.exports = mongoose.model('teams', teamSchema);
