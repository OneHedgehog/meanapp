let errorProc = {
    dbError:   (err) => {
        let mes = 'db error. Something gonna work';
        switch(err.code){
            case(11000):
                mes = 'e-mail or username already exist';
                break;
        }
        return mes;
    },
    validators: (err) => {
        let mes = 'validation err';
       for ( let prop in err){
          mes = err[prop].msg;
          console.log( mes);
       }
       return mes;// last message

    }
};

module.exports = errorProc;