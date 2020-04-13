var Channel = require('../models/channel');
var mongoose = require('mongoose');
var Message = require('../models/Message');

exports.new_message = function(req, res) {
	console.log(req.body);
	Message.create(req.body, function(err, message) {
		if (err) return handleError();
		Channel.findById(message.channel).messages.push(message);
		res.json(message);
	});
}
