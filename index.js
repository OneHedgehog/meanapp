const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');

//todo remove
mongoose.set('debug', true);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//routes
const auth = require('./routes/auth');
const login = require('./routes/login');
const profile = require('./routes/profile');
const blog = require('./routes/blog');
const dashboard = require('./routes/dashboard');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
    if(err){
        console.log('Connection err: ' + err);
        return;
    }

    console.log('Succefully connect');
});

app.use(cors());

app.use(express.static(__dirname + '/client/dist'));

app.use('/auth', auth);
app.use('/login', login);
app.use( (req, res, next) => {
    const id = req.headers.authid;

    if(!id){
        res.json({
            success: false,
            mes: 'empty id'
        });
        return;
    }

    req.user_id = id;
    next();
});
app.use('/profile', profile);
app.use('/blog', blog);
app.use('/dashboard', dashboard);


app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname + '/client/dist/'));
});

app.listen( process.env.PORT || 5000, ()=> {
    console.log('listend')

});