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

userSchema.pre('save', function(next, done){
    let self = this;

    if(!this.isModified('password')){
        done();
    }

    bcrypt.hash(self.password + 'NrnLvzkzQ2n6bzNcGuLQ8GMUDTR89X2yYZ9kq5J6', null, null, function(err, hash) {
        if(err) return next(err);
        self.password = hash;
    });

    next()
});


userSchema.methods.comparePassword = (password) => {
    bcrypt.compareSync(password + 'NrnLvzkzQ2n6bzNcGuLQ8GMUDTR89X2yYZ9kq5J6', this.password);
};

module.exports = mongoose.model('User', userSchema);