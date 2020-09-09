var express = require('express');

exports.signupForm = function(req, res) {
    res.render('accounts/new', { user: {}, errors: [] });
};