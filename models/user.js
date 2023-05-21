var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	username: String,
	mobile: Number,
	gender: String,
	dob:Number,
	password: String,
	passwordConf: String
}),
User = mongoose.model('User', userSchema);

module.exports = User;