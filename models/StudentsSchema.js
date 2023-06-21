const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const schema = new mongoose.Schema(
    {
        _id:{
            type:Number,
        },
        fullName:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            require:true,
            trim: true,
            lowercase: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password:{
            type:String,
            require:true
        },
        department:{
            type:Number,
            ref:"departments"
        },
        
    },
    {
        _id:false
    }
)

schema.plugin(AutoIncrement, { id: "eventAutoIncrementStudents", inc_field: "_id" });

mongoose.model('students' , schema);