var Channel = require('../models/channel');
var mongoose = require('mongoose');
var User = require('../models/user');
var jwt = require('jsonwebtoken');

exports.login = function(req, res) {
	User.findOne({name: req.body.name})
	.then((user) => {
		if (user.password === req.body.password) {		
		token = jwt.sign({ user }, 'the_secret_key')
		res.json({
			token, 
			user
		})
		}
		else {
		res.status(401).json({error: 'Invalid login. Please try again'});
	}
	})
	
}

exports.register = function(req, res) {	
	if (req.body) {
		User.findOne({name: req.body.name}, function(err, results) {
			if (err) return next(err);
			if (results !== null) {
				res.status(400).json({error: 'This username is already taken. Please select another.'})
			}
			else {
			User.create(req.body, function(err, user) {
				if (err) return next(err);
				const token = jwt.sign({user}, 'the_secret_key')
			//switch to environment variable
			res.json({
				token, 
				user
			})
			});
		}
		
	});
}
	else {
		res.sendStatus(400)
	}
}