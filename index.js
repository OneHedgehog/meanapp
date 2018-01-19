const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//routes
const auth = require('./routes/auth');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
    if(err){
        console.log('Connection err: ' + err);
        return;
    }

    console.log('Succefully connect');
});


app.use(express.static(__dirname + '/client/dist/'));
app.use('/auth', auth);

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/client/dist/'));
});

app.listen(8080, ()=>{
    console.log('listend')

});