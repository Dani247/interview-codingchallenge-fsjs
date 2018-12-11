const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
});

module.exports = Book = mongoose.model('book',bookSchema);