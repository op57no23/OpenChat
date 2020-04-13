var Channel = require('../models/channel');
var mongoose = require('mongoose');

exports.all_channels = function(req, res) {
		Channel.find(function(err, results) {
				if (err) return next(err);
				res.json(results);
		});
}

exports.new_channel = function(req, res) {
		console.log('creating new channel');
		Channel.create(req.body, function(err, channel) {
				if (err) return next(err);
				res.json(channel);
		}
		);
}

exports.get_channel = function(req, res) {
	Channel.find({'_id': req._id}, 'messages', function(err, messages) {
		if (err) return handleError();
		res.json(messages);
	});
}



