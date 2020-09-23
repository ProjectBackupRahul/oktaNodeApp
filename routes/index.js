var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.userContext) {
    res.render('index', { title: 'Node JS Okta App', user: req.userContext });
  } else {
    res.render('login', { title: 'Node JS Okta App' })
  }
});

   router.post('/url', function(req, res, next){
     const url = req.body.url;
     console.log('Hi there !!')
     console.log(url);
   });

module.exports = router;
