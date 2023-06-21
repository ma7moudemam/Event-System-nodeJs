const mongoose = require('mongoose');
require('../models/StudentsSchema');
const Student = mongoose.model('students');


exports.getAllStudents = ((req , res, next)=>{
    Student.find({}).populate({path:"department"})
            .then(
                data=>{
                    res.status(200).json(data);
                }
            )
            .catch(err=>{
                next(err);
            })
})

exports.getStudentById = ((req,res,next)=>{
    Student.findById(req.body.id)
            .then(
                data=>{
                    if(data == null){
                        throw new Error("Student Not Found");
                    }
                    res.status(200).json(data);
                }
            )
            .catch(err=>{
                next(err);
            })
});


exports.addStudent = ((req , res , next)=>{
    

    let object = new Student({
        _id:req.body.id,
        fullName:req.body.name,
        department:req.body.department
    })

    object.save()
        .then(data=>{
            res.status(201).json({message:"added" , data});
        })
        .catch(err =>{
            next(err);
        })
})

exports.updateStudent = ((req , res ,next)=>{
        Student.findByIdAndUpdate(req.body.id , {
            $set:{
                fullName:req.body.name,
                department:req.body.department
            }
        })
            .then(
                data=>{
                    if(data==null){
                        throw new Error("Student Not Found");
                    }
                    res.status(200).json("Updated" , data);
                }
            )
            .catch(err=>{
                next(err);
            })
})

exports.deleteStudent = ((req , res,next)=>{
    Student.findByIdAndDelete(req.body.id)
            .then(data=>{
                if(data == null){
                    throw new Error("Student Not Found");
                }
                res.status(200).json("Deleted");
            })
            .catch(err=>{
                next(err);
            })
})