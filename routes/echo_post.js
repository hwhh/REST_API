var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/echo', function(req, res, next) {
  res.render('index', { title: 'req.query.msg' });
});

module.exports = router;
