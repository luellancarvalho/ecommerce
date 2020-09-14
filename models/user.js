var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Bcrypt = require("bcryptjs");

var userSchema = new Schema({
   username: {
       type: String,
       lowercase: true,
       trim: true,
       required: true,
   },
   password: { type: String, required: true } 
},
{
   timestamps: true
});

userSchema.pre("save", function(next) {
   if(!this.isModified("password")) {
       return next();
   }
   this.password = Bcrypt.hashSync(this.password, 10);
   next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;