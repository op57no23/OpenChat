var Channel = require('../models/channel');
var Message = require('../models/message');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken')

exports.all_channels = function(req, res) {
		jwt.verify(req.token, 'the_secret_key', err => { // verifies token
        if (err) { // if error, respond with 401 code
          res.sendStatus(401)
        } else {
			Channel.find(function(err, results) {
					if (err) res.status(400).json(err);
					res.json(results);
			});
		}});
}

exports.new_channel = function(req, res) {
		jwt.verify(req.token, 'the_secret_key', err => { // verifies token
        if (err) { // if error, respond with 401 code
          res.sendStatus(401)
        } else {
		Channel.create(req.body, function(err, channel) {
				if (err) res.status(400).json(err);
				res.json(channel);
		}
		);
	}});
}

exports.get_messages = function (req, res) {
	jwt.verify(req.token, 'the_secret_key', err => { // verifies token
        if (err) { // if error, respond with 401 code
          res.sendStatus(401)
        }
        else{
	Message.find({channel: req.params.id}, function(err, messages) {
					if (err) res.status(400).json(err);
			res.json(messages);
		})}})
} 

exports.get_channel = function(req, res) {
	jwt.verify(req.token, 'the_secret_key', err => { // verifies token
        if (err) { // if error, respond with 401 code
          res.sendStatus(401)
        } else {
	Channel.findOne({_id: req.params.id}, function(err, channel) {
		if (err) res.status(400).json(err);
		res.json(channel);
	});
}})}




