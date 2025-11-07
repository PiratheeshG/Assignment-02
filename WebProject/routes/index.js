var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home' });
});

/* GET about. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About' });
});

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'About Page' });
});

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home Page' });
});

module.exports = router;
