var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();

router 
  .route('/signin')
  .get(userController.loginForm)

module.exports = router;
