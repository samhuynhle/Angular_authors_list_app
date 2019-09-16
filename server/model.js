const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authorsdb', {useNewUrlParser: true});

var AuthorSchema = mongoose.Schema({
    message_created: {type: String, default:"Author successfully submited!"},
    message_edited: {type: String, default: "Author succcessfully edited!"},
    name: {type: String, required: [true, "You must input an input into the input!"], minlength: [3, "Author name must be 3 or more characters!"]},
}, {timestamps: true});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;