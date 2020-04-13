var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new Schema(
		{
				text: {type: String, required: true, minlength: 1},
				user: {type: Schema.Types.ObjectId, ref: 'User'},
				channel: {type: Schema.Types.ObjectId, ref: 'Channel'}
		}

);

module.exports = mongoose.model('Message', MessageSchema);
