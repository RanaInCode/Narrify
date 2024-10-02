const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
})

const User = mongoose.model("User", UserSchema);

module.exports = { User }; // exporting like this because i am importing it like const { user } = require('path');
//i can also export directly like module.exports = User but then i have to change my importing statement