const validator = require('validator');



var savedEmail = 'give email using post method';

async function checkEmail(req,res){
    const body = req.body;
    const id = body.id;

    const isEmail = validator.isEmail(id);

    if(isEmail){
        savedEmail = id;
        res.json({
            msg : 'you have entered the right email'
        });

    }else{
        savedEmail = 'you have not entered the right mail';
        res.json({
            msg : 'the required feild must be mail'
        });
    }
   
}

async function emailGetController(req,res){

    res.json({
        email : savedEmail
    });
   



}



module.exports = {
    checkEmail,emailGetController
}