var express = require('express');
var router = express.Router();

/* Home */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home' });
});

/* About */
router.get('/about', (req, res) => {
  res.render('index', { 
    title: 'About' });
});

/* Projects */
router.get('/projects', (req, res) => {
  res.render('index', { 
    title: 'Projects' });
});

/* Contact */
router.get('/contact', (req, res) => {
  res.render('index', { 
    title: 'Contact' });
});

module.exports = router;
