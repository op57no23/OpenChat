var Channel = require('../models/channel');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

exports.login = function(req, res) {
	const user = User.find({name: user.name});
	if (
		req.body &&
		req.body.password === user.password) {
		token = jwt.sign({ user }, 'secret_key')
		res.json({
			token, 
			name: user.name
		})
	}
	else {
		res.sendStatus(400)
	}
}

exports.register = function(req, res) {
	if (req.body) {
		const user = {
			name: req.body.name,
			password: req.body.password
			//not encrypted!
		}
		if (User.find({name: user.name})) {
		console.log('user name already in use');
	}
	else {
		const token = jwt.sign({ user }, 'secret_key')
		//switch to environment variable
		res.json({
			token, 
			name: user.name
		})
	}
	else {
		res.sendStatus(400)
	}
}