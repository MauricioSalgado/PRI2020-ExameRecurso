var express = require('express');
var router = express.Router();

var Teams = require('../controllers/teams')

router.get('/teams', function(req, res, next) {
  Teams.listar()
    .then(dados => res.render('index', {teams: dados.data}))
    .catch(erro => res.status(500).jsonp(erro))
})

router.get('/teams/add', function(req, res, next) {
  res.render('addTeam');
})

router.get('/token', function(req, res, next) {
  res.render('addTeam');
})

router.get('/teams/:id', function(req, res, next) {
  Teams.consultar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

router.get('/teams/:id/members/:idMember', function(req, res, next) {

})

router.post('/teams', function(req, res, next) {
  Teams.inserir(req.body)
    .then(dados => res.status(201).jsonp(dados))
    .catch(e => res.status(500).json({error:e}))
})

router.post('/teams/:id/members', function(req, res, next) {

})

router.delete('/teams/:id', function(req, res, next) {
  Teams.apagar(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).json({error:e}))
})

router.delete('/teams/:id/members/:idMember', function(req, res, next) {

})

module.exports = router;
