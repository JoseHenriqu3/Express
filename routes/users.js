var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('your cool the teacher');
});


router.get('/cool/beach', function(req, res, next) {
  res.send('Adoro uma prainha');
});

router.get('/ifc', function(req, res, next) {
  res.send('Seja bem vindo ao IFC - CAS  (Instituto Federal Catarinence - Campus Avançados Sombrio');
});



module.exports = router;
