/**
 * story model
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var storySchema=new Schema({
    name:String,
    author:{type:Schema.Types.ObjectId,ref:'User'},
    content:String
});

mongoose.model('Story',storySchema);