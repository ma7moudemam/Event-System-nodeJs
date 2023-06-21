const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        _id:ObjectId,
        email:{
            type:String,
            unique:true,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        fullName:{
            type:String,
            require:true
        },
        role:{
            type:String,
            enum:['Student' , 'Instructor']
        },
        image:{
            type:string
        },
        address:{
            city:{
                type:String
            },
            street:{
                type:String
            },
            building:{
                type:String
            }
        }
    }
)

mongoose.model('speakers' , schema);