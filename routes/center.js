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

router.get('/list-classes', function(req, res, next) {
  res.render('center/list_classes', { title: 'Trang danh sách lớp học' });
});

router.get('/list-teachers', function(req, res, next) {
  res.render('center/list_teachers', { title: 'Trang danh sách giáo viên' });
});
router.get('/tuyensinh', function(req, res, next) {
  res.render('center/tuyensinh', { title: 'Trang tuyển sinh' });
});

module.exports = router;
