
var mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const  BlogPost = new Schema({
//     author: String,
//     title: String,
//     body: String,
//     date: Date
//    });
   
// const User = mongoose.model('BlogPost',BlogPost);
module.exports= mongoose.model('User',{
    // author: String,
    // title: String,
    // body: String,
    // date: Date
    UserName:String,
    Password:String,
    Email:String
   });