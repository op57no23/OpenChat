var Channel = require('../models/channel');
var mongoose = require('mongoose');
var Message = require('../models/message');
var jwt = require('jsonwebtoken');

exports.new_message = function(req, res) {	
	jwt.verify(req.token, 'the_secret_key', err => { // verifies token
        if (err) { // if error, respond with 401 code
          res.sendStatus(401)
        } else {
	console.log(req.body);
	Message.create(req.body, function(err, message) {
		if (err) res.json(err);
		Channel.findOneAndUpdate({channel: message.channel}, {$push: {messages: message}});
	});
}})};

