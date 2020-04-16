var Channel = require('../models/channel');
var mongoose = require('mongoose');
var Message = require('../models/message');
var jwt = require('jsonwebtoken');

exports.new_message = function(req, res) {	
	jwt.verify(req.token, 'the_secret_key', err => { // verifies token
        if (err) { // if error, respond with 401 code
          res.sendStatus(401)
        } else {
	Message.create(req.body, function(err, message) {
		if (err) res.json(err);
		res.json(message);
	});
}})};

exports.add_to_channel = function(req, res) {
	Channel.findOneAndUpdate({_id: req.body.data.channel}, {$push: {messages: req.body.data._id}}, {new: true}, function(err, channel) {
		if (err) res.json(err);
		res.json(channel.messages[channel.messages.length - 1]);
	})
}

