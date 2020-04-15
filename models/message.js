var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new Schema(
		{
				text: {type: String, required: true, minlength: 1},
				date: {type: Date, default: Date.now()},
				user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
				channel: {type: Schema.Types.ObjectId, ref: 'Channel', required: true}
		}

);

module.exports = mongoose.model('Message', MessageSchema);
