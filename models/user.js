const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sha1 = require('sha1');

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
    },
    imagePath: String
});

userSchema.pre('save', function(next, done){
    let self = this;

    if(!this.isModified('password')){
        done();
    }

    self.password = sha1(self.password + 'NrnLvzkzQ2n6bzNcGuLQ8GMUDTR89X2yYZ9kq5J6');
    next()
});


module.exports = mongoose.model('User', userSchema);