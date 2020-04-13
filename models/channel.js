var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ChannelSchema = new Schema(
		{
				name: {type: String, required: true},
				messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
		}

);

module.exports = mongoose.model('Channel', ChannelSchema);
