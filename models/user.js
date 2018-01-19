const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

// userSchema.pre('save', function(next){
//     // if (!this.isModified('password')){
//     //     next();
//     // }
//     // bcrypt.hash("bacon", null, null, function(err, hash) {
//     //     this.password = 'jb';
//     // });
// });

module.exports = mongoose.model('User', userSchema);