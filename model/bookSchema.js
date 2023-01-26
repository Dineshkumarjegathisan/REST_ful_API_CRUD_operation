const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    bookId:{
        type :String,
        require:true,
        unique:true
    },
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    published_date: {
        type: String,
        require: true
    },
    publisher: {
        type: String,
        require: true
    },
    pages: {
        type: Number,
        require: true
    },
    inStock:{
        type : String,
        require: true
        
    },
    isDeleted:{
        type :Boolean,
        require: true
    }
});
module.exports = mongoose.model('Books', BookSchema);
