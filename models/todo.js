const mongoose = require('mongoose');

const todoScheme = mongoose.Schema({
    title: {type: String, required: true},
    // title:{type: String, required: true, unique: true, maxlength: 20, minlength: 8, trim: true}

    desc: String
}, {timestamps:true})

const Todo = mongoose.model('todo', todoScheme); // This will create a Todo Model

module.exports = Todo;