
const {validationResult} = require('express-validator');

exports.userLogin = (req , res , next)=>{

    let errors = validationResult(req);
    if(!errors.isEmpty()){
        let error = new Error();
        error.status = 422;
        error.message =errors.array().reduce((current , object)=>current+object.msg+" ", "");
        throw error;
    }
    res.status(201).json({data:"User Login"})
}

exports.userRegister = (req , res , next)=>{

};