var express = require('express');

exports.signupForm = function(req, res) {
    res.render('accounts/new', { user: {}, errors: [] });
};

exports.create = function(req, res) {
    console.log(req.body)
    
    res.redirect('/')
          
};
