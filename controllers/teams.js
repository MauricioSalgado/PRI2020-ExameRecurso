var mongoose = require('mongoose');
let Team = require('../models/team');

module.exports.listar = () => {
  return Team
          .aggregate([{$project: {_id:1,team:1,pitch1:1,pitch2:1,techPitch:1,businessReport:1,techReport:1,nmembers:{$size:"$members"}}}])
          .exec()
}

module.exports.consultar = id => {
  return Team
          .findById(id)
          .exec()
}

module.exports.inserir = team => {
  var newTeam = new Team(team)

  return newTeam.save()
}

module.exports.apagar = id => {
  return Team.deleteOne({_id: id})
}
