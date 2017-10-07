var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('query', { title: "Echo",  extension: 'echo' , query_prams : req.query.msg }  );
});

module.exports = router;
  