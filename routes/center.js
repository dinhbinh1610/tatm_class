var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('center/index', { title: 'Home page' });
});

router.get('/about', function(req, res, next) {
  res.render('center/about', { title: 'Trang giới thiệu trung tâm' });
});
router.get('/about/edit', function(req, res, next) {
  res.render('center/edit-about', { title: 'Trang giới thiệu trung tâm' });
});

module.exports = router;
