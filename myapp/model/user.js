/**
 *User Model
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
    username : String,
    password : String
});

mongoose.model('User',UserSchema);