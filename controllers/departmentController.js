const {validationResult} = require('express-validator');
const mongoose = require('mongoose');
require('../models/DepartmentSchema');

const Department = mongoose.model('departments');

exports.getAllDepartments = (req , res , next)=>{
    Department.find({})
                .then(data=>{
                    res.status(200).json(data);

                })
                .catch(error=>{
                   next(error);
                })
}

exports.createDepartment = (req , res , next)=>{

    let errors = validationResult(req);

    if(!errors.isEmpty()){
        let error = new Error();
        error.status = 422;
        error.message =errors.array().reduce((current , object)=>current+object.msg+" ", "");
        throw error;
    }

    let object = new Department({
        _id:req.body.id,
        name:req.body.name,
        location:req.body.location
    })

    object.save()
        .then(data=>{
            res.status(201).json({message:"added" , data});
        })
        .catch(err =>{
            next(err);
        })
}


exports.updateDepartment = (req , res , next)=>{

    Department.findByIdAndUpdate(req.body.id,{
        $set:{
            name:req.body.name,
            location:req.body.location
        }
    })
                .then(data=>{
                    if(data == null){
                        throw new Error("Department is Not Found!");
                    }
                    res.status(200).json({message:"updated" , data})
                })
                .catch(error=>next(error))
}

/* exports.deleteDepartment = (req , res , next)=>{

    Department.findOneAndDelete(req.body.id)
                .then(data=>{
                    if(data == null){
                        throw new Error("Department is Not Found!");
                    }

                    res.status(200).json({message:"Deleted"})
                }) 
                .catch(err =>{
                    next(err);
                })  

} */


exports.deleteDepartment = async (req , res , next)=>{
    try{
        let data = await Department.findByIdAndDelete(req.body.id)
        if(data == null){
            throw new Error("Department is Not Found!");
        }
        res.status(200).json({message:"Deleted"})

    }catch(error){
        next(error)
    }

}