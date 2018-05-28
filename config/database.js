const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://OneHedgehog:s583jqv.@ds261527.mlab.com:61527/todolist',
    local_uri: 'mongodb://127.0.0.1:27017',
    secret: crypto,
    db: 'mean-db'
};
